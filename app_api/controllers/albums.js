const mongoose = require('mongoose');
const Album = mongoose.model('Album');

const albumsList = function (req, res) {
  Album
    .find()
    .then(albums => {
      res
        .status(200)
        .json(albums);
    })
    .catch(err => {
      res
        .status(500)
        .json({ message: "Error retrieving albums", error: err });
    });
};

const albumsReadOne = function (req, res) {
  if (req.params && req.params.albumid) {
    Album
      .findById(req.params.albumid)
      .then(album => {
        if (!album) {
          return res
            .status(404)
            .json({ message: "albumid not found" });
        }
        res
          .status(200)
          .json(album);
      })
      .catch(err => {
        res
          .status(500)
          .json({ message: "Error retrieving album", error: err });
      });
  } else {
    res
      .status(400)
      .json({ message: "No albumid in request" });
  }
};

module.exports = {
  albumsList,
  albumsReadOne
};
