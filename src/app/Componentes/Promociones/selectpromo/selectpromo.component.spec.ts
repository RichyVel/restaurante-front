import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectpromoComponent } from './selectpromo.component';

describe('SelectpromoComponent', () => {
  let component: SelectpromoComponent;
  let fixture: ComponentFixture<SelectpromoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectpromoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectpromoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
