import { TestBed } from '@angular/core/testing';

import { ServicioBebidasService } from './servicio-bebidas.service';

describe('ServicioBebidasService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ServicioBebidasService = TestBed.get(ServicioBebidasService);
    expect(service).toBeTruthy();
  });
});
