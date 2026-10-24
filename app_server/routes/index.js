const express = require('express');
const router = express.Router();
const ctrlAuth = require('../controllers/auth');
const ctrlReviews = require('../controllers/reviews');

router.get('/', ctrlAuth.homeRedirect);
router.get('/register', ctrlAuth.registerForm);
router.post('/register', ctrlAuth.doRegister);
router.get('/login', ctrlAuth.loginForm);
router.post('/login', ctrlAuth.doLogin);
router.get('/reviews', ctrlReviews.reviewsList);

module.exports = router;
