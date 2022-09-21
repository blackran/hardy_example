import { CHANGE_THEME, CHANGE_SEARCH, SET_ERROR } from './actions/typesGlobal';

const initState = {
  isDark: false,
  searchValue: '',
  error: '',
};

const reducers = (state = initState, { type, datas }) => {
  switch (type) {
    case SET_ERROR:
      return Object.assign({}, state, datas);
    case CHANGE_THEME:
      return Object.assign({}, state, datas);
    case CHANGE_SEARCH:
      return Object.assign({}, state, datas);
    default:
      return state;
  }
};

export default reducers;
