import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudeditComponent } from './crudedit.component';

describe('CrudeditComponent', () => {
  let component: CrudeditComponent;
  let fixture: ComponentFixture<CrudeditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrudeditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudeditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
