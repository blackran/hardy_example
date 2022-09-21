import { INIT_CATEGORIE_CATALOGUE } from './actions/typesCategorieCatalogue';

const initState = {
  datasCategorie: [],
};

const reducers = (state = initState, { type, datas }) => {
  switch (type) {
    case INIT_CATEGORIE_CATALOGUE:
      return Object.assign({}, state, datas);
    default:
      return state;
  }
};

export default reducers;
