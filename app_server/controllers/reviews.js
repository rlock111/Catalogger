const reviewsList = function (req, res) {
  res.render('reviews', { title: 'My Reviews' });
};

module.exports = {
  reviewsList,
};
