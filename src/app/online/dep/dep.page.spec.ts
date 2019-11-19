import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DepPage } from './dep.page';

describe('DepPage', () => {
  let component: DepPage;
  let fixture: ComponentFixture<DepPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DepPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DepPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
