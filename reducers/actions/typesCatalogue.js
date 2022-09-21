export const INIT_NEW = 'INIT_NEW';
export const INIT_BEST = 'INIT_BEST';
export const SET_ONE = 'SET_ONE';
export const ADD_ONE = 'ADD_ONE';
export const DELETE_ONE = 'DELETE_ONE';

export const dispatchAddOne = datasOne => {
  return {type: ADD_ONE, datas: datasOne};
};

export const dispatchInitBest = datasBest => {
  return {type: INIT_BEST, datas: {datasBest: datasBest || []}};
};

export const dispatchInitNew = datasNew => {
  return {type: INIT_NEW, datas: {datasNew: datasNew || []}};
};

export const dispatchSetOne = datasOne => {
  return {type: SET_ONE, datas: {datasOne: datasOne || []}};
};

export const dispatchDeleteOne = id => {
  return {type: DELETE_ONE, datas: {_id: id}};
};
