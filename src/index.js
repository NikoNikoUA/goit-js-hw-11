import Notiflix from 'notiflix';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import axios from 'axios';
import { picturesSearch } from './search-api';

const API_KEY = '38986631-ae11b42db00bd05f0f2571500';

axios.defaults.headers.common['x-api-key'] = API_KEY;

// Notify.failure('Oops! Something went wrong! Try reloading the page!', {
//   width: '400px',
//   borderRadius: '10px',
//   position: 'center-center',
// });

const input = document.querySelector('#search-bar-input');

const form = document.querySelector('.search-form');

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();
  picturesSearch();
}
