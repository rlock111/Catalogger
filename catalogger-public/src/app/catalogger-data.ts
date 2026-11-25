import { Service } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { inject } from '@angular/core';
import { firstValueFrom } from 'rxjs';

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

@Service()
export class CataloggerData {
  private http = inject(HttpClient);
  private apiBaseUrl = 'http://localhost:3000/api';

  public async getAlbums(): Promise<Album[]> {
    const url = `${this.apiBaseUrl}/albums`;
    return firstValueFrom(this.http.get<Album[]>(url));
  }
}
