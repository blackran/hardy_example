import {
  DELETE_ONE,
  INIT_NEW,
  INIT_BEST,
  SET_ONE,
  ADD_ONE,
} from './actions/typesCatalogue';

const initState = {
  datasBest: [],
};

const reducers = (state = initState, {type, datas}) => {
  let newStock;
  switch (type) {
    case INIT_NEW:
      return Object.assign({}, state, datas);
    case INIT_BEST:
      return Object.assign({}, state, datas);
    case ADD_ONE:
      newStock = [...state.datasBest, datas];
      return Object.assign({}, state, {datasBest: newStock});
    case DELETE_ONE:
      newStock = state.datasBest.filter(dataBest => {
        return dataBest._id !== datas._id;
      });
      return Object.assign({}, state, {datasBest: newStock});
    case SET_ONE:
      return Object.assign({}, state, datas);
    default:
      return state;
  }
};

export default reducers;
