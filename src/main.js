import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import iconError from '../src/img/error-white.svg';
import iconInfo from '../src/img/info-message-icon.svg';

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

const toastErrorOptions = {
  iconUrl: iconError,
  title: 'Error',
  titleSize: '16px',
  messageSize: '16px',
  messageColor: '#fff',
  color: '#ef4040',
  position: 'topRight',
  theme: 'dark',
};

const toastInfoOptions = {
  iconUrl: iconInfo,
  iconColor: 'white',
  title: '',
  titleSize: '16px',
  messageSize: '16px',
  messageColor: '#fff',
  color: '#40a9ef',
  position: 'topRight',
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
      ...toastErrorOptions,
      message: 'Please enter a search term!',
    });
    clearGallery();
    toggleLoader(false);
    toggleMoreBtn(false);
    return;
  }

  page = 1;
  clearGallery();

  fetchImages(currentQuery, page, perPage)
    .then(respObj => {
      toggleLoader(false);
      if (respObj.hits.length === 0) {
        clearGallery();
        iziToast.show({
          ...toastErrorOptions,
          message:
            'Sorry, there are no images matching your search query. Please try again!',
        });
        toggleMoreBtn(false);
      } else {
        renderGallery(respObj.hits, false);
        if (respObj.hits.length < perPage) {
          toggleMoreBtn(false);
        } else {
          toggleMoreBtn(true);
          page += 1;
        }
      }
    })
    .catch(error => {
      toggleLoader(false);
      iziToast.show({
        ...toastErrorOptions,
        message: error.message || 'Unknown error',
      });
      toggleMoreBtn(false);
    });
};

const loadMoreFunction = () => {
  toggleLoader(true);
  toggleMoreBtn(false);

  fetchImages(currentQuery, page, perPage)
    .then(respObj => {
      toggleLoader(false);
      if (respObj.hits.length === 0) {
        iziToast.show({
          ...toastInfoOptions,
          message: "We're sorry, but you've reached the end of search results.",
        });
        toggleMoreBtn(false);
      } else {
        renderGallery(respObj.hits, true);
        if (respObj.hits.length < perPage) {
          toggleMoreBtn(false);
          iziToast.show({
            ...toastInfoOptions,
            message:
              "We're sorry, but you've reached the end of search results.",
          });
        } else {
          toggleMoreBtn(true);
          page += 1;
        }
      }
    })
    .catch(error => {
      toggleLoader(false);
      iziToast.show({
        ...toastErrorOptions,
        message: error.message || 'Unknown error',
      });
      toggleMoreBtn(false);
    });
};

form.addEventListener('submit', searchFunction);
moreBtn.addEventListener('click', loadMoreFunction);
