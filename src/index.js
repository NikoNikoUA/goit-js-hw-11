import Notiflix from 'notiflix';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import axios from 'axios';
import { picturesSearch } from './search-api.js';
import { serviceMarkup } from './markup.js';

const API_KEY = '38986631-ae11b42db00bd05f0f2571500';

axios.defaults.headers.common['x-api-key'] = API_KEY;

const form = document.querySelector('.search-form');

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
  const inputValue = event.target.elements.searchQuery.value;
  event.preventDefault();
  event.target.reset();
  picturesSearch(inputValue).then(serviceMarkup);
  // .catch(error => {
  //   Notify.failure('Oops! Something went wrong! Try reloading the page!', {
  //     width: '400px',
  //     borderRadius: '10px',
  //     position: 'center-center',
  //   });
  // });
}
