const mongoose = require('mongoose');
const reviewSchema = new mongoose.Schema({
  author: String,
  rating: {
    type: Number,
    required: true,
    min: 0,
    max: 5,
  },
  reviewText: String,
  createdOn: {
    type: Date,
    default: Date.now,
  },
});

const albumSchema = new mongoose.Schema({
  title: { type: String, required: true },
  artist: { type: String, required: true },
  coverImage: String,
  spotifyUrl: String,
  reviews: [reviewSchema],
});
mongoose.model('Album', albumSchema);
