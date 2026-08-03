import { Injectable, signal, computed } from '@angular/core';

// @Injectable => this class can be injected into components
@Injectable({ providedIn: 'root' })
export class PremiumService {
  // signal = useState
  basePrice = 1000;
  riskMultiplier = signal(1.0);

  // computed value = useMemo (when riskMultiplier changes)
  finalPremium = computed(() => this.basePrice * this.riskMultiplier());

  updateRisk(multiplier: number) {
    this.riskMultiplier.set(multiplier);
  }
}