import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProvPage } from './prov.page';

describe('ProvPage', () => {
  let component: ProvPage;
  let fixture: ComponentFixture<ProvPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProvPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProvPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
