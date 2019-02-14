import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PromoprocessComponent } from './promoprocess.component';

describe('PromoprocessComponent', () => {
  let component: PromoprocessComponent;
  let fixture: ComponentFixture<PromoprocessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PromoprocessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PromoprocessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
