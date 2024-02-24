import { TestBed } from '@angular/core/testing';

import { VoterserviceService } from './voterservice.service';

describe('VoterserviceService', () => {
  let service: VoterserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VoterserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
