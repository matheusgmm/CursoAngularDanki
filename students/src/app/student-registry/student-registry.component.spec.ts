import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentRegistryComponent } from './student-registry.component';

describe('StudentRegistryComponent', () => {
  let component: StudentRegistryComponent;
  let fixture: ComponentFixture<StudentRegistryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentRegistryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentRegistryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
