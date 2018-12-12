import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DailyChuvadiComponent } from './daily-chuvadi.component';

describe('DailyChuvadiComponent', () => {
  let component: DailyChuvadiComponent;
  let fixture: ComponentFixture<DailyChuvadiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DailyChuvadiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DailyChuvadiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
