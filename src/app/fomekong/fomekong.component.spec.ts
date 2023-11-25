import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FomekongComponent } from './fomekong.component';

describe('FomekongComponent', () => {
  let component: FomekongComponent;
  let fixture: ComponentFixture<FomekongComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FomekongComponent]
    });
    fixture = TestBed.createComponent(FomekongComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
