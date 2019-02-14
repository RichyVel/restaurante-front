import { TestBed } from '@angular/core/testing';

import { ServicioPostresService } from './servicio-postres.service';

describe('ServicioPostresService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ServicioPostresService = TestBed.get(ServicioPostresService);
    expect(service).toBeTruthy();
  });
});
