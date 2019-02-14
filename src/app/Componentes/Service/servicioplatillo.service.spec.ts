import { TestBed } from '@angular/core/testing';

import { ServicioplatilloService } from './servicioplatillo.service';

describe('ServicioplatilloService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ServicioplatilloService = TestBed.get(ServicioplatilloService);
    expect(service).toBeTruthy();
  });
});
