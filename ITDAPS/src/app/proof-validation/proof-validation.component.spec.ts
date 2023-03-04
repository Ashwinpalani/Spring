import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProofValidationComponent } from './proof-validation.component';

describe('ProofValidationComponent', () => {
  let component: ProofValidationComponent;
  let fixture: ComponentFixture<ProofValidationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProofValidationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProofValidationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
