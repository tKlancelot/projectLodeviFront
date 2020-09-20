import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuGarageOwnerComponent } from './menu-garage-owner.component';

describe('MenuGarageOwnerComponent', () => {
  let component: MenuGarageOwnerComponent;
  let fixture: ComponentFixture<MenuGarageOwnerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuGarageOwnerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuGarageOwnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
