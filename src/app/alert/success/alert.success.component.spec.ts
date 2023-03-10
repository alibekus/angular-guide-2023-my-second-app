import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertSuccessComponent } from './alert.success.component';

describe('SuccessComponent', () => {
  let component: AlertSuccessComponent;
  let fixture: ComponentFixture<AlertSuccessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlertSuccessComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlertSuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
