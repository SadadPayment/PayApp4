import { TestBed } from '@angular/core/testing';

import { E15Service } from './e15.service';

describe('E15Service', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: E15Service = TestBed.get(E15Service);
    expect(service).toBeTruthy();
  });
});
