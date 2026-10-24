const axios = require('axios');
const apiOptions = {
  server: 'http://localhost:3000'
};
if (process.env.NODE_ENV === 'production') {
  apiOptions.server = 'https://catalogger-rl.onrender.com';
}

const registerForm = function (req, res) {
  res.render('register', { title: 'Register' });
};

const loginForm = function (req, res) {
  res.render('login', { title: 'Login' });
};

const homeRedirect = function (req, res) {
  res.redirect('/login');
};

/* POST 'Register' page */
const doRegister = async function (req, res) {
  const url = apiOptions.server + '/api/register';
  try {
    const response = await axios.post(url, {
      email: req.body.email,
      password: req.body.password
    });
    if (response.status === 201) {
      res.redirect('/reviews');
    }
  } catch (err) {
    const status = err.response ? err.response.status : 500;
    res.status(status).render('error', {
      message: 'Error registering',
      error: err.response ? err.response.data : { message: err.message }
    });
  }
};

/* POST 'Login' page */
const doLogin = async function (req, res) {
  const url = apiOptions.server + '/api/login';
  try {
    const response = await axios.post(url, {
      email: req.body.email,
      password: req.body.password
    });
    if (response.status === 200) {
      res.redirect('/reviews');
    }
  } catch (err) {
    const status = err.response ? err.response.status : 500;
    res.status(status).render('error', {
      message: 'Error logging in',
      error: err.response ? err.response.data : { message: err.message }
    });
  }
};

module.exports = {
  registerForm,
  loginForm,
  homeRedirect,
  doRegister,
  doLogin,
};
