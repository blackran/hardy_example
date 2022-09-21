import { combineReducers } from 'redux';
import ReducersGlobal from './ReducersGlobal';
import ReducersAdmin from './ReducersAdmin';
import ReducersAdore from './ReducersAdore';
import ReducersCatalogue from './ReducersCatalogue';
import ReducersCategorieCatalogue from './ReducersCategorieCatalogue';
import ReducersClient from './ReducersClient';
import ReducersCredit from './ReducersCredit';

export default combineReducers({
  global: ReducersGlobal,
  adore: ReducersAdore,
  admin: ReducersAdmin,
  catalogue: ReducersCatalogue,
  categorieCatalogue: ReducersCategorieCatalogue,
  client: ReducersClient,
  credit: ReducersCredit,
});
