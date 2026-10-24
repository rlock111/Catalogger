const reviewsList = function (req, res) {
  res.render('reviews', {
    title: 'My Reviews',
    albums: [
      {
        title: 'Red',
        artist: 'King Crimson',
        coverImage: 'https://coverartarchive.org/release/d30b6902-f26a-4bfc-adbc-c3a6824ddc23/front-500',
        spotifyUrl: 'https://open.spotify.com/album/4mA3RKIoEoX4JlJSHueQae',
        reviews: [
          {
            author: 'Ryan',
            rating: 5,
            reviewText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            createdOn: '1 October 2026'
          }
        ]
      },
      {
        title: 'Power, Corruption & Lies',
        artist: 'New Order',
        coverImage: 'https://coverartarchive.org/release/002ac904-c483-4155-8952-1b283aded393/front-500',
        spotifyUrl: 'https://open.spotify.com/album/6qcqaO5QSn2T13BlumueKk',
        reviews: [
          {
            author: 'Ryan',
            rating: 4,
            reviewText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            createdOn: '25 September 2026'
          }
        ]
      }
    ]
  });
};

module.exports = {
  reviewsList,
};
