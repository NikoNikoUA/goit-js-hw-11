import axios from 'axios';
const API_KEY = '38986631-ae11b42db00bd05f0f2571500';

export async function picturesSearch(inputValue, currentPage = '1') {
  const BASE_URL = 'https://pixabay.com/api/';
  const params = new URLSearchParams({
    key: API_KEY,
    q: inputValue,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    page: currentPage,
    per_page: 40,
  });

  const response = await axios.get(`${BASE_URL}?${params}`);

  return response;
}

// USING FETCH
// return axios.get(`${BASE_URL}?${params}`).then(response => {
//   if (!response.ok) {
//     throw new Error(response.statusText);
//   }
//   return response;
// });
