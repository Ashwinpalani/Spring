import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ITDeclarationsComponent } from './it-declarations.component';

describe('ITDeclarationsComponent', () => {
  let component: ITDeclarationsComponent;
  let fixture: ComponentFixture<ITDeclarationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ITDeclarationsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ITDeclarationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
