import axios from 'axios';
import graphql from './graphql';

function addImage(req, _id, data, payload) {
  var formData = new FormData();
  formData.append('query', graphql.addImage(data.data));
  formData.append('image', data.image);

  axios
    .post(`/graphql${req || ''}`, formData, {
      header: {
        'Content-Type': 'multipart/form-data',
      },
    })
    .catch(err => {
      console.log(err);
    });
}

export default {addImage};
