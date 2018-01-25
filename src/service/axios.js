import Axios from 'axios';

Axios.defaults.headers.post['Content-Type'] = 'application/json; charset=utf-8';

export const Ajax = (option = {}) => {
  return new Promise((resolve, reject) => {
    Axios({
      method: "POST",
      url: option.url ? option.url : '/admin-graphql',
      data: option.data
    }).then((response) => {
      resolve(response.data);
    }).catch((error) => {
      reject(error);
    });
  });
};