import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubsriptionBoxComponent } from './subsription-box.component';

describe('SubsriptionBoxComponent', () => {
  let component: SubsriptionBoxComponent;
  let fixture: ComponentFixture<SubsriptionBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubsriptionBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubsriptionBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
