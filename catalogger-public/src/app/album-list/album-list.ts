import { Component, signal } from '@angular/core';

export class Review {
  author!: string;
  rating!: number;
  reviewText!: string;
  createdOn!: string;
}

export class Album {
  _id!: string;
  title!: string;
  artist!: string;
  coverImage!: string;
  spotifyUrl!: string;
  reviews!: Review[];
}

@Component({
  imports: [],
  selector: 'app-album-list',
  styleUrl: './album-list.css',
  templateUrl: './album-list.html',
})
export class AlbumList {
  album: Album = {
    _id: '6aca54274c5e7ceecf9976ce',
    title: 'Red',
    artist: 'King Crimson',
    coverImage: 'https://coverartarchive.org/release/d30b6902-f26a-4bfc-adbc-c3a6824ddc23/front-500',
    spotifyUrl: 'https://open.spotify.com/album/4mA3RKIoEoX4JlJSHueQae',
    reviews: [
      {
        author: 'Ryan',
        rating: 5,
        reviewText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        createdOn: '2026-10-01'
      }
    ]
  };
}
