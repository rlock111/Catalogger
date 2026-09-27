const express = require('express');
const router = express.Router();
const ctrlAuth = require('../controllers/auth');
const ctrlReviews = require('../controllers/reviews');

router.get('/register', ctrlAuth.registerForm);
router.get('/login', ctrlAuth.loginForm);
router.get('/reviews', ctrlReviews.reviewsList);

module.exports = router;
