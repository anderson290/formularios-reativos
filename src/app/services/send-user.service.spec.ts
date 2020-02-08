import { TestBed } from '@angular/core/testing';

import { SendUserService } from './send-user.service';

describe('SendUserService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SendUserService = TestBed.get(SendUserService);
    expect(service).toBeTruthy();
  });
});
