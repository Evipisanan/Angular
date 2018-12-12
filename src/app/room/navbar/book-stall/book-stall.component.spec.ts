import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookStallComponent } from './book-stall.component';

describe('BookStallComponent', () => {
  let component: BookStallComponent;
  let fixture: ComponentFixture<BookStallComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookStallComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookStallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
