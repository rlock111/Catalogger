import { TestBed } from '@angular/core/testing';
import { CataloggerData } from './catalogger-data';

describe('CataloggerData', () => {
  let service: CataloggerData;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CataloggerData);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
