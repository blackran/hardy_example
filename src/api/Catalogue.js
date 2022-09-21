import axios from 'axios';
import graphql from './graphql';
import apiImages from './Images';

function deleteCatalogue(req, _id, datas, payload, eventError) {
  return dispatch => {
    axios
      .post(`/graphql${req || ''}`, {
        query: graphql.deleteCatalogue(_id),
      })
      .then(({data}) => {
        if (eventError) {
          eventError(false);
        }
        dispatch(payload(data.data.deleteCatalogue._id));
      })
      .catch(() => {
        if (eventError) {
          console.log('eventError 1');
          eventError(false);
        }
      });
  };
}

function getAllCatalogue(req, _id, datas, payload, eventError) {
  return dispatch => {
    axios
      .post(`/graphql${req || ''}`, {
        query: graphql.getAllCatalogue,
      })
      .then(({data}) => {
        if (eventError) {
          eventError(null);
        }
        dispatch(payload(data.data.getAllCatalogue));
      })
      .catch(() => {
        if (eventError) {
          console.log('eventError 2');
          eventError(null);
        }
      });
  };
}

function findOneCatalogue(req, _id, datas, payload) {
  return dispatch => {
    axios
      .post(`/graphql${req || ''}`, {
        query: graphql.findOneCatalogue(_id),
      })
      .then(({data}) => {
        dispatch(payload(data.data.findOneCatalogue));
      })
      .catch(err => {
        console.log(err);
      });
  };
}

function addCatalogue(req, _id, {datas, images}, payload, reset) {
  const {principal, other} = images;
  return dispatch => {
    var formData = new FormData();
    console.log(graphql.addCatalogue(datas));
    formData.append('query', graphql.addCatalogue(datas));
    formData.append('image', principal);

    axios
      .post(`/graphql${req || ''}`, formData, {
        header: {
          'Content-Type': 'multipart/form-data',
        },
      })
      .then(({data}) => {
        if (data?.data?.addCatalogue?._id) {
          other?.map(ot => {
            apiImages.addImage(
              '',
              null,
              {
                data: {
                  nom: '',
                  isPrincipal: 0,
                  catalogue: data?.data?.addCatalogue?._id,
                  client: '6165c305ebba4179bfe5579d',
                },
                image: ot,
              },
              null,
            );
            return null;
          });
        }
        dispatch(payload(data.data.addCatalogue));
        reset();
      })
      .catch(err => {
        console.log(err);
      });
  };
}

export default {getAllCatalogue, findOneCatalogue, addCatalogue, deleteCatalogue};
