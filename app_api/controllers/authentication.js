const register = function (req, res) {
  res
    .status(200)
    .json({"status" : "success"});
};

const login = function (req, res) {
  res
    .status(200)
    .json({"status" : "success"});
};

module.exports = {
  register,
  login
};
