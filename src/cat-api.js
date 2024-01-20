import axios from 'axios';

axios.defaults.headers.common['x-api-key'] =
  'live_LtgdoXVJ2ceIttAbsWuiz90kH1DvEAu1OgZmbObUcd0nH2MKYoueFgP7AS9qe6kN';

const CATS_API_BASE_URL = 'https://api.thecatapi.com/v1';

export function fetchBreeds() {
  return axios(`${CATS_API_BASE_URL}/breeds`).then(response => response.data);
}

export function fetchCatByBreed(breedId) {
  return axios(`${CATS_API_BASE_URL}/images/search?breed_ids=${breedId}`)
    .then(response => response.data)
    .then(response => {
      const [item] = response;

      if (!item) {
        throw new Error(`Breed ${breedId} not found`);
      }

      const { url } = item;

      const [breed] = item?.breeds || [];

      if (!breed) {
        throw new Error(`Breed ${breedId} not found`);
      }

      return { ...breed, url };
    });
}
