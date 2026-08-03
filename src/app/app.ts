import { Component } from '@angular/core';
import { CalculatorComponent } from './features/calculator/calculator';
import { DashboardLayoutComponent } from './core/layout/dashboard-layout/dashboard-layout';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CalculatorComponent, DashboardLayoutComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class AppComponent {
  title = 'insurance-dashboard';
}