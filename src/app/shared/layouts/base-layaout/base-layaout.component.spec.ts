import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseLayaoutComponent } from './base-layaout.component';

describe('BaseLayaoutComponent', () => {
  let component: BaseLayaoutComponent;
  let fixture: ComponentFixture<BaseLayaoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BaseLayaoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BaseLayaoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
