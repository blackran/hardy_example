import axios from 'axios';
import graphql from './graphql';

function getAllAdore(req, _id, _, payload, eventError) {
  return dispatch => {
    axios
      .post(`/graphql${req || ''}`, {
        query: graphql.getAllCatalogueAdore(_id),
      })
      .then(({ data }) => {
        const datas = data?.data?.findAdoreClient?.map(e => e.catalogue);
        if (datas) {
          dispatch(payload(datas));
        }
      })
      .catch(err => console.log(err));
  };
}

export default { getAllAdore };
