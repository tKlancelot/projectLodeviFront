import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GaragesComponent } from './garage-list.component';

describe('GaragesComponent', () => {
  let component: GaragesComponent;
  let fixture: ComponentFixture<GaragesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GaragesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GaragesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
