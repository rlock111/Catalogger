const registerForm = function (req, res) {
  res.render('register', { title: 'Register' });
};

const loginForm = function (req, res) {
  res.render('login', { title: 'Login' });
};

module.exports = {
  registerForm,
  loginForm,
};
