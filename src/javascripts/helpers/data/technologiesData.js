import axios from 'axios';
import apiKeys from '../apiKeys.json';

const baseUrl = apiKeys.firebaseKeys.databaseURL;

const getTech = () => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/technologies.json`)
    .then((response) => {
      const theTech = response.data;
      const technologies = [];
      Object.keys(theTech).forEach((fbId) => {
        theTech[fbId].id = fbId;
        technologies.push(theTech[fbId]);
      });
      resolve(technologies);
    })
    .catch((error) => reject(error));
});

export default { getTech };
