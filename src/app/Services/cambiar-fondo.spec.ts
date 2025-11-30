import { TestBed } from '@angular/core/testing';

import { ModoNavidad } from './modo-navidad';

describe('ModoNavidad', () => {
  let service: ModoNavidad;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ModoNavidad);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
