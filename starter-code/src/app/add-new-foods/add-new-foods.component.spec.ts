import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewFoodsComponent } from './add-new-foods.component';

describe('AddNewFoodsComponent', () => {
  let component: AddNewFoodsComponent;
  let fixture: ComponentFixture<AddNewFoodsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddNewFoodsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddNewFoodsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
