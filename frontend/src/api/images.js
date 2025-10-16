import axios from 'axios';
export const fetchImage = async (query) => {
  try {
    const res = await axios.get('https://api.unsplash.com/photos/random', {
      params: { query, client_id: process.env.REACT_APP_UNSPLASH_KEY }
    });
    return res.data.urls.small;
  } catch (e) { return null; }
};
