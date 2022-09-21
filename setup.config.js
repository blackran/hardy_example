import 'react-native';
import chai from 'chai';
import dirtyChai from 'dirty-chai';
import createChaiEnzyme from 'chai-enzyme';
import createChaiJestDiff from 'chai-jest-diff';
import sinonChai from 'sinon-chai'
import chaiJestSnapshot from 'chai-jest-snapshot'
import enzymeToJSON from 'enzyme-to-json/serializer'

import Enzyme from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

chai
  .use(dirtyChai)
  .use(createChaiJestDiff())
  .use(chaiJestSnapshot)
  .use(createChaiEnzyme())
  .use(sinonChai)


const setJestCucumberConfiguration = require('jest-cucumber').setJestCucumberConfiguration;

const { JSDOM } = require('jsdom');

const url = 'http://localhost';

const jsdom = new JSDOM('<!doctype html><html><body></body></html>', { url });

const { window } = jsdom;

function copyProps(src, target) {
  Object.defineProperties( target, {
    ...Object.getOwnPropertyDescriptors(src),
    ...Object.getOwnPropertyDescriptors(target)
  });
}

global.window = window;
global.document = window.document;
global.navigator = {
  userAgent: 'node.js'
}

copyProps(window, global);

expect.addSnapshotSerializer(enzymeToJSON)
Enzyme.configure({ adapter: new Adapter()});

setJestCucumberConfiguration({
  tagFilter: '@included and not @excluded',
  scenarioNameTemplate: (vars) => {
    // console.log(` ${vars.featureTitle} - ${vars.scenarioTitle}`)
    return ` ${vars.featureTitle} - ${vars.scenarioTitle}`;
  },
  loadRelativePath: true
});

const items = {};

jest.mock('@react-native-community/async-storage', () => ({
    setItem: jest.fn((item, value) => {
      return new Promise((resolve, reject) => {        
        items[item] = value;
        resolve(value);
      });
    }),
    multiSet:  jest.fn((item, value) => {
      return new Promise((resolve, reject) => {
        items[item] = value;
        resolve(value);
      });
    }),
    getItem: jest.fn((item, value) => {
      return new Promise((resolve, reject) => {
        resolve(items[item]);
      });
    }),
    multiGet: jest.fn((item) => {
      return new Promise((resolve, reject) => {
        resolve(items[item]);
      });
    }),
    removeItem: jest.fn((item) => {
      return new Promise((resolve, reject) => {
        resolve(delete items[item]);
      });
    }),
    getAllKeys: jest.fn((items) => {
      return new Promise((resolve) => {
        resolve(items.keys());
      });
    })
}));

const ALLOWED_ERROR_TAGS = ['pascalcase', 'lowercase', 'uppercase']
console.error = e => {
  let setShow = true
  for(let tag of ALLOWED_ERROR_TAGS){
    if (!e.toLowerCase().includes(tag.toLowerCase())) {
      setShow = false
    }
  }
  if (setShow) {
    console.warn(e);
  }
};

