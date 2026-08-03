import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PremiumService } from '../../core/services/premium';

@Component({
  selector: 'app-calculator',
  standalone: true,
  imports: [FormsModule], // import the necessary packages directly into the component
  templateUrl: './calculator.html',
  styleUrl: './calculator.scss'
})
export class CalculatorComponent {
  premiumService = inject(PremiumService); 
}