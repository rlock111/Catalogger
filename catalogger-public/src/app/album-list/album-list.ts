import { Component, OnInit, inject, ChangeDetectorRef } from '@angular/core';
import { ReviewDatePipe } from '../review-date-pipe';
import { CataloggerData, Album } from '../catalogger-data';

@Component({
  imports: [ReviewDatePipe],
  selector: 'app-album-list',
  styleUrl: './album-list.css',
  templateUrl: './album-list.html',
})
export class AlbumList {
  private cataloggerData = inject(CataloggerData);
  private cdr = inject(ChangeDetectorRef);

  albums: Album[] = [];

  private async getAlbums(): Promise<void> {
    try {
      this.albums = await this.cataloggerData.getAlbums();
      console.log('Fetched albums:', this.albums);

      this.cdr.detectChanges();
    } catch (error) {
      console.error('Error fetching albums:', error);
    }
  }

  ngOnInit(): void {
    this.getAlbums();
  }
}
