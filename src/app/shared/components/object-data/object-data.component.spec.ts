import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ObjectDataComponent } from './object-data.component';

describe('ObjectFieldComponent', () => {
  let component: ObjectDataComponent;
  let fixture: ComponentFixture<ObjectDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ObjectDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ObjectDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
