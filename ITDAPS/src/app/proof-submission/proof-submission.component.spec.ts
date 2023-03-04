import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProofSubmissionComponent } from './proof-submission.component';

describe('ProofSubmissionComponent', () => {
  let component: ProofSubmissionComponent;
  let fixture: ComponentFixture<ProofSubmissionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProofSubmissionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProofSubmissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
