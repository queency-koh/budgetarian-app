import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BudgetStatusCardComponent } from './budget-status-card.component';

describe('BudgetStatusCardComponent', () => {
  let component: BudgetStatusCardComponent;
  let fixture: ComponentFixture<BudgetStatusCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BudgetStatusCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BudgetStatusCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
