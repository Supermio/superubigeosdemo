import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginadoPage } from './paginado.page';

describe('PaginadoPage', () => {
  let component: PaginadoPage;
  let fixture: ComponentFixture<PaginadoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaginadoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginadoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
