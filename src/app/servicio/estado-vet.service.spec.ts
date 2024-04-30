import { TestBed } from '@angular/core/testing';

import { EstadoVetService } from './estado-vet.service';

describe('EstadoVetService', () => {
  let service: EstadoVetService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EstadoVetService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
