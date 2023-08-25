import Notiflix from 'notiflix';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import axios from 'axios';
import { picturesSearch } from './search-api.js';
import { serviceMarkup } from './markup.js';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const API_KEY = '38986631-ae11b42db00bd05f0f2571500';
axios.defaults.headers.common['x-api-key'] = API_KEY;

const form = document.querySelector('.search-form');
const gallery = document.querySelector('.gallery');
const loadMoreBtn = document.querySelector('.load-more-hidden');
let inputValue = '';
let currentPage = 1;
const lightbox = new SimpleLightbox('.gallery a');

loadMoreBtn.addEventListener('click', onLoadMore);
form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
  gallery.innerHTML = '';
  inputValue = event.target.elements.searchQuery.value;
  event.preventDefault();
  event.target.reset();
  picturesSearch(inputValue, currentPage)
    .then(pictures => {
      if (pictures.hits.length === 0) {
        gallery.innerHTML = '';
        loadMoreBtn.classList.replace('button-79', 'load-more-hidden');
        Notify.failure(
          'Sorry, there are no images matching your search query. Please try again.',
          {
            width: '400px',
            borderRadius: '10px',
            position: 'right-corner',
          }
        );
      } else {
        gallery.innerHTML = serviceMarkup(pictures);
        lightbox.refresh();

        Notify.success('Hurrah! Here is the result of your request.', {
          width: '400px',
          borderRadius: '10px',
          position: 'right-corner',
        });
        if (currentPage < pictures.totalHits) {
          loadMoreBtn.classList.replace('load-more-hidden', 'button-79');
        }
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

function onLoadMore() {
  currentPage += 1;
  picturesSearch(inputValue, currentPage).then(pictures => {
    gallery.insertAdjacentHTML('beforeend', serviceMarkup(pictures));

    lightbox.refresh();

    if (currentPage >= pictures.totalHits) {
      loadMoreBtn.classList.replace('button-79', 'load-more-hidden');
      Notify.failure(
        "We're sorry, but you've reached the end of search results.",
        {
          width: '400px',
          borderRadius: '10px',
          position: 'center-center',
        }
      );
    }
  });
}
