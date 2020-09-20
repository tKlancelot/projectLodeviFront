import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelcarAddComponent } from './modelcar-add.component';

describe('ModelcarAddComponent', () => {
  let component: ModelcarAddComponent;
  let fixture: ComponentFixture<ModelcarAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModelcarAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModelcarAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
