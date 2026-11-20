import { Component, signal } from '@angular/core';
import { ReviewDatePipe } from '../review-date-pipe';

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
  imports: [ReviewDatePipe],
  selector: 'app-album-list',
  styleUrl: './album-list.css',
  templateUrl: './album-list.html',
})
export class AlbumList {
  albums: Album[] = [
    {
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
          createdOn: '2026-10-01T00:00:00.000Z'
        }
      ]
    },
    {
      _id: '6aca53a34c5e7ceecf9976cc',
      title: 'Power, Corruption & Lies',
      artist: 'New Order',
      coverImage: 'https://coverartarchive.org/release/002ac904-c483-4155-8952-1b283aded393/front-500',
      spotifyUrl: 'https://open.spotify.com/album/6qcqaO5QSn2T13BlumueKk',
      reviews: [
        {
          author: 'Ryan',
          rating: 4,
          reviewText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          createdOn: '2026-09-25T00:00:00.000Z'
        }
      ]
    }
  ];
}
