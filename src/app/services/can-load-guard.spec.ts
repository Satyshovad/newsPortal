import {CanLoadGuardService} from './can-load-guard.service';
import {TestBed} from '@angular/core/testing';

describe('CanLoadGuardService', () => {
  let guard: CanLoadGuardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(CanLoadGuardService);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
