import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentpurchaseComponent } from './studentpurchase.component';

describe('StudentpurchaseComponent', () => {
  let component: StudentpurchaseComponent;
  let fixture: ComponentFixture<StudentpurchaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentpurchaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentpurchaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
