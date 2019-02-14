import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SigueparticipandoComponent } from './sigueparticipando.component';

describe('SigueparticipandoComponent', () => {
  let component: SigueparticipandoComponent;
  let fixture: ComponentFixture<SigueparticipandoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SigueparticipandoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SigueparticipandoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
