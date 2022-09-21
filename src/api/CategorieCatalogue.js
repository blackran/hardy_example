import axios from 'axios';
import graphql from './graphql';

function getAllCategorieCatalogue(req, _id, datas, payload, eventError) {
  return dispatch => {
    axios
      .post(`/graphql${req || ''}`, {
        query: graphql.getAllCategorieCatalogue(),
      })
      .then(({data}) => {
        if (eventError) {
          eventError(false);
        }
        dispatch(payload(data.data.getAllCategorieCatalogue));
      })
      .catch(() => {
        if (eventError) {
          eventError(false);
        }
      });
  };
}

export default {getAllCategorieCatalogue};
