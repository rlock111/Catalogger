const express = require('express');
const router = express.Router();
const ctrlAlbums = require('../controllers/albums');
const ctrlAuth = require('../controllers/authentication');

// albums
router
  .route('/albums')
  .get(ctrlAlbums.albumsList);

router
  .route('/albums/:albumid')
  .get(ctrlAlbums.albumsReadOne);

// authentication
router
  .route('/register')
  .post(ctrlAuth.register);

router
  .route('/login')
  .post(ctrlAuth.login);

module.exports = router;
