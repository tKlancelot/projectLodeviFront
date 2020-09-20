import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelcarListComponent } from './modelcar-list.component';

describe('ModelcarListComponent', () => {
  let component: ModelcarListComponent;
  let fixture: ComponentFixture<ModelcarListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModelcarListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModelcarListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
