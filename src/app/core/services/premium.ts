import { Injectable, signal, computed } from '@angular/core';

@Injectable({ providedIn: 'root' }) 
export class PremiumService {
  basePrice = 1000;
  
  riskMultiplier = signal<number>(1.0);
  coverageAmount = signal<number>(100000); 

  finalPremium = computed(() => {
    const baseCalculated = this.basePrice * this.riskMultiplier();
    const coveragePremium = this.coverageAmount() * 0.005;
    return baseCalculated + coveragePremium;
  });

  updateCalculations(risk: number, coverage: number): void {
    this.riskMultiplier.set(risk);
    this.coverageAmount.set(coverage);
  }
}