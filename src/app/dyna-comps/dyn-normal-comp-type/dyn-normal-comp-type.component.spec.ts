import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DynNormalCompTypeComponent } from './dyn-normal-comp-type.component';

describe('DynNormalCompTypeComponent', () => {
  let component: DynNormalCompTypeComponent;
  let fixture: ComponentFixture<DynNormalCompTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DynNormalCompTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DynNormalCompTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
