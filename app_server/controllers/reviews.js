const axios = require('axios');
const apiOptions = {
  server: 'http://localhost:3000'
};
if (process.env.NODE_ENV === 'production') {
  apiOptions.server = 'https://catalogger-rl.onrender.com';
}

const _renderReviewsPage = function (req, res, albums) {
  res.render('reviews', {
    title: 'My Reviews',
    albums: albums
  });
};

/* GET 'My Reviews' page */
const reviewsList = async function (req, res) {
  const path = '/api/albums';
  const url = apiOptions.server + path;

  let albums = [];
  try {
    const response = await axios.get(url);
    if (response.status === 200 && Array.isArray(response.data)) {
      albums = response.data;
    } else {
      console.log('API error or non-array body:', response.data);
    }
  } catch (err) {
    console.log('Request failed:', err.message);
  }
  _renderReviewsPage(req, res, albums);
};

module.exports = {
  reviewsList
};
