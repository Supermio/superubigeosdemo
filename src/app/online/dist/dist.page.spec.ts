import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DistPage } from './dist.page';

describe('DistPage', () => {
  let component: DistPage;
  let fixture: ComponentFixture<DistPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DistPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DistPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
