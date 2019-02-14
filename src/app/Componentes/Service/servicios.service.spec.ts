import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiciosService } from './servicios.service';

describe('ServiciosService', () => {
   beforeEach(() => TestBed.configureTestingModule({}));



  it('should be create', () => {
    const servicios: ServiciosService = TestBed.get(ServiciosService);
    expect(servicios).toBeTruthy();
  });
});
