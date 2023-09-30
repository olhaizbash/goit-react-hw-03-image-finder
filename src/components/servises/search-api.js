import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
axios.defaults.baseURL = BASE_URL;

export async function SearchImages(search, page) {
  const params = new URLSearchParams({
    key: '39077539-1e107db3fd9a5ec3005c5bc93',
    q: search,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    page: page,
    per_page: 12,
  });

  const response = await axios.get(`?${params}`);
  return response.data.hits;
}
