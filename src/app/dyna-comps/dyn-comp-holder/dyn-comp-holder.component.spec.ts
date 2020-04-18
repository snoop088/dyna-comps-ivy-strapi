import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DynCompHolderComponent } from './dyn-comp-holder.component';

describe('DynCompHolderComponent', () => {
  let component: DynCompHolderComponent;
  let fixture: ComponentFixture<DynCompHolderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DynCompHolderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DynCompHolderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
