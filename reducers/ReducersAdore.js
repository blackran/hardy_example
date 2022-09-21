import { INIT_ADORE } from './actions/typesAdore';

const initState = {
  datasAdore: [],
};

const reducers = (state = initState, { type, datas }) => {
  switch (type) {
    case INIT_ADORE:
      return Object.assign({}, state, datas);
    default:
      return state;
  }
};

export default reducers;
