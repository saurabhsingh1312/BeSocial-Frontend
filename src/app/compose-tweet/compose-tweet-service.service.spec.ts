import { TestBed } from '@angular/core/testing';

import { ComposeTweetServiceService } from './compose-tweet-service.service';

describe('ComposeTweetServiceService', () => {
  let service: ComposeTweetServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ComposeTweetServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
