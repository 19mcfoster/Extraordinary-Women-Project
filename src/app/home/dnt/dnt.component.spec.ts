import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DntComponent } from './dnt.component';

describe('DntComponent', () => {
  let component: DntComponent;
  let fixture: ComponentFixture<DntComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DntComponent]
    });
    fixture = TestBed.createComponent(DntComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
