import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactViewComponent } from './contact-view.component';

describe('ImageViewComponent', () => {
  let component: ContactViewComponent;
  let fixture: ComponentFixture<ContactViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContactViewComponent]
    });
    fixture = TestBed.createComponent(ContactViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});