import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxAngularProgressBarComponent } from './ngx-angular-progress-bar.component';

describe('NgxAngularProgressBarComponent', () => {
  let component: NgxAngularProgressBarComponent;
  let fixture: ComponentFixture<NgxAngularProgressBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxAngularProgressBarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgxAngularProgressBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
