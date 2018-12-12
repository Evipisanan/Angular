import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DailyBarComponent } from './daily-bar.component';

describe('DailyBarComponent', () => {
  let component: DailyBarComponent;
  let fixture: ComponentFixture<DailyBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DailyBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DailyBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
