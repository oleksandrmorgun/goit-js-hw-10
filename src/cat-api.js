import axios from 'axios';

axios.defaults.headers.common['x-api-key'] = 'live_gLtSFDyH7Qf7Q0u2oSHJOwVqIowxb3AAe0CTsMo1vMk4iOY28E1YnWOx6XUXNYDn';

export const BASE_URL = 'https://api.thecatapi.com/v1';

export function fetchBreeds() {
  return axios.get(`${BASE_URL}/breeds`);
}

export function fetchCatByBreed(breedId) {
  return axios.get(`${BASE_URL}/images/search?breed_ids=${breedId}`);
}