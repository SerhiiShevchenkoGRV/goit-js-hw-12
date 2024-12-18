import axios from 'axios';
import { page } from '../main';
import { perPage } from '../main';

export const fetchImages = async query => {
  const requeryParams = {
    key: '47662740-53400b40c2ec2ca1e86ebf909',
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    page: page,
    per_page: perPage,
  };

  const config = {
    method: 'get',
    baseURL: 'https://pixabay.com/api/',
    params: requeryParams,
  };
  try {
    const response = await axios(config);
    return response.data;
  } catch (error) {
    return Promise.reject(error);
  }
};
