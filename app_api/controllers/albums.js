const albumsList = function (req, res) {
  res
    .status(200)
    .json({"status" : "success"});
};

const albumsReadOne = function (req, res) {
  res
    .status(200)
    .json({"status" : "success"});
};

module.exports = {
  albumsList,
  albumsReadOne
};
