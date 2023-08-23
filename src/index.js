import Notiflix from 'notiflix';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import axios from 'axios';
import { picturesSearch } from './search-api.js';
import { serviceMarkup } from './markup.js';

const API_KEY = '38986631-ae11b42db00bd05f0f2571500';
axios.defaults.headers.common['x-api-key'] = API_KEY;

const form = document.querySelector('.search-form');
const gallery = document.querySelector('.gallery');
const loadMoreBtn = document.querySelector('.load-more');
let inputValue = '';
let page = 1;

loadMoreBtn.addEventListener('click', onLoadMore);
form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
  inputValue = event.target.elements.searchQuery.value;
  event.preventDefault();
  event.target.reset();
  picturesSearch(inputValue)
    .then(pictures => {
      if (pictures.hits.length === 0) {
        gallery.innerHTML = '';
        loadMoreBtn.classList.replace('button-79', 'load-more');
        Notify.failure(
          'Sorry, there are no images matching your search query. Please try again.',
          {
            width: '400px',
            borderRadius: '10px',
            position: 'right-corner',
          }
        );
      } else {
        serviceMarkup(pictures),
          Notify.success('Hurrah! Here is the result of your request.', {
            width: '400px',
            borderRadius: '10px',
            position: 'right-corner',
          });
      }
    })
    .catch(error => {
      Notify.failure('Oops! Something went wrong! Try reloading the page!', {
        width: '400px',
        borderRadius: '10px',
        position: 'center-center',
      });
    });
}

function onLoadMore(page) {
  loadMoreBtn.classList.replace('button-79', 'load-more');
  // page += 1;
  // picturesSearch(inputValue).then(data => {
  //   gallery.insertAdjacentElement('beforeend', serviceMarkup(data.hits));
  // });
  // if (data.params.page >= data.totalHits) {
  // }
}
