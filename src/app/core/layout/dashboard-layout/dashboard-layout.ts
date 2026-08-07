import { Component } from '@angular/core';
import { ToastComponent } from '../../../shared/components/toast/toast';

@Component({
  selector: 'app-dashboard-layout',
  standalone: true,
  templateUrl: './dashboard-layout.html',
  styleUrl: './dashboard-layout.scss',
  imports: [ToastComponent],
})
export class DashboardLayoutComponent {}
