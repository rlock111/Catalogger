const registerForm = function (req, res) {
  res.render('register', { title: 'Register' });
};

const loginForm = function (req, res) {
  res.render('login', { title: 'Login' });
};

const homeRedirect = function (req, res) {
  res.redirect('/login');
};

module.exports = {
  registerForm,
  loginForm,
  homeRedirect,
};
