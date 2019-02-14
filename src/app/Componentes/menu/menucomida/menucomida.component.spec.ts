import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenucomidaComponent } from './menucomida.component';

describe('MenucomidaComponent', () => {
  let component: MenucomidaComponent;
  let fixture: ComponentFixture<MenucomidaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenucomidaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenucomidaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
