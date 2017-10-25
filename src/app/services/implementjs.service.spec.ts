import { TestBed, inject } from '@angular/core/testing';

import { ImplementjsService } from './implementjs.service';

describe('ImplementjsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ImplementjsService]
    });
  });

  it('should be created', inject([ImplementjsService], (service: ImplementjsService) => {
    expect(service).toBeTruthy();
  }));
});
