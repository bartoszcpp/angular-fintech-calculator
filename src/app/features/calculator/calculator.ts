import { Component, inject, OnInit, DestroyRef } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CurrencyPipe } from '@angular/common';
import { PremiumService } from '../../core/services/premium';

@Component({
  selector: 'app-calculator',
  standalone: true,
  imports: [ReactiveFormsModule, CurrencyPipe],
  templateUrl: './calculator.html',
  styleUrl: './calculator.scss'
})
export class CalculatorComponent implements OnInit {
  premiumService = inject(PremiumService);
  
  private fb = inject(FormBuilder);
  private destroyRef = inject(DestroyRef);

  calculatorForm: FormGroup = this.fb.group({
    riskLevel: [1.0, Validators.required],
    coverage: [100000, [Validators.required, Validators.min(50000), Validators.max(1000000)]]
  });

  ngOnInit(): void {
    this.calculatorForm.valueChanges
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(value => {
        if (this.calculatorForm.valid) {
          this.premiumService.updateCalculations(value.riskLevel, value.coverage);
        }
      });
  }

  get coverageControl() {
    return this.calculatorForm.get('coverage');
  }
}