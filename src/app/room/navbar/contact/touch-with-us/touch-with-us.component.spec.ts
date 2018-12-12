import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TouchWithUsComponent } from './touch-with-us.component';

describe('TouchWithUsComponent', () => {
  let component: TouchWithUsComponent;
  let fixture: ComponentFixture<TouchWithUsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TouchWithUsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TouchWithUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
