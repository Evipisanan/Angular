import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecialChuvadiComponent } from './special-chuvadi.component';

describe('SpecialChuvadiComponent', () => {
  let component: SpecialChuvadiComponent;
  let fixture: ComponentFixture<SpecialChuvadiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpecialChuvadiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpecialChuvadiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
