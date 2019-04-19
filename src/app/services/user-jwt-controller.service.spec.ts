import { TestBed } from '@angular/core/testing';

import { UserJwtControllerService } from './user-jwt-controller.service';

describe('UserJwtControllerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UserJwtControllerService = TestBed.get(UserJwtControllerService);
    expect(service).toBeTruthy();
  });
});
