import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdddeleteComponent } from './adddelete.component';

describe('AdddeleteComponent', () => {
  let component: AdddeleteComponent;
  let fixture: ComponentFixture<AdddeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdddeleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdddeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
