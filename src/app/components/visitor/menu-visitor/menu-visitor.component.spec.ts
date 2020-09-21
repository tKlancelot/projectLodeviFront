import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuVisitorComponent } from './menu-visitor.component';

describe('MenuVisitorComponent', () => {
  let component: MenuVisitorComponent;
  let fixture: ComponentFixture<MenuVisitorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuVisitorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuVisitorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
