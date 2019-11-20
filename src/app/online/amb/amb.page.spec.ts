import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AmbPage } from './amb.page';

describe('AmbPage', () => {
  let component: AmbPage;
  let fixture: ComponentFixture<AmbPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AmbPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AmbPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
