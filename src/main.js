import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import iconError from '../src/img/error-white.svg';

import { fetchImages } from './js/pixabay-api';
import { renderGallery } from './js/render-functions';

export const gallery = document.querySelector('.gallery');
export const moreBtn = document.querySelector('.more-btn');
export let page = 1;
export let perPage = 15;

const form = document.querySelector('.form');
const loader = document.querySelector('.loader');
const input = form.querySelector('.search-input');
let currentQuery = '';

const toastOptions = {
  title: 'Error',
  titleSize: '16px',
  messageSize: '16px',
  messageColor: '#fff',
  color: '#ef4040',
  position: 'topRight',
  iconUrl: iconError,
  theme: 'dark',
};

const toggleLoader = isVisible => {
  loader.hidden = !isVisible;
};

const toggleMoreBtn = isVisible => {
  moreBtn.hidden = !isVisible;
};

const clearGallery = () => {
  gallery.innerHTML = '';
};

toggleLoader(false);
toggleMoreBtn(false);

const searchFunction = event => {
  event.preventDefault();
  toggleLoader(true);

  currentQuery = input.value.trim();
  if (!currentQuery) {
    iziToast.show({
      ...toastOptions,
      message: 'Please enter a search term!',
    });
    clearGallery();
    return;
  }

  page = 1;
  clearGallery();

  fetchImages(currentQuery, page, perPage)
    .then(respObj => {
      if (respObj.hits.length === 0) {
        clearGallery();
        iziToast.show({
          ...toastOptions,
          message:
            'Sorry, there are no images matching your search query. Please try again!',
        });
      } else {
        renderGallery(respObj.hits, true);
        toggleMoreBtn(true);
        page += 1;
        toggleLoader(false);

        if (respObj.hits.length < perPage) {
          toggleMoreBtn(false);
        } else {
          toggleMoreBtn(true);
          page += 1;
        }
      }
    })
    .catch(error => {
      clearGallery();
      iziToast.show({
        ...toastOptions,
        message: error.message || 'Unknown error',
      });
    });
};

const loadMoreFunction = () => {
  toggleLoader(true);

  const currentPage = page;

  fetchImages(currentQuery, currentPage, perPage)
    .then(respObj => {
      if (respObj.hits.length === 0) {
        iziToast.show({
          ...toastOptions,
          message: "We're sorry, but you've reached the end of search results.",
        });
        toggleMoreBtn(false);
      } else {
        renderGallery(respObj.hits, true);
        page += 1;
      }
    })
    .catch(error => {
      iziToast.show({
        ...toastOptions,
        message: error,
      });
    })
    .finally(() => {
      toggleLoader(false);
    });
};

form.addEventListener('submit', searchFunction);
moreBtn.addEventListener('click', loadMoreFunction);
