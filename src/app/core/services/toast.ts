import { Injectable, signal } from '@angular/core';

export type ToastType = 'success' | 'error' | 'info';

export interface Toast {
  id: string;
  message: string;
  type: ToastType;
}

@Injectable({ providedIn: 'root' })
export class ToastService {
  // Global state for notifications
  toasts = signal<Toast[]>([]);

  show(message: string, type: ToastType = 'info'): void {
    const id = Math.random().toString(36).substring(2, 9);

    this.toasts.update((current) => [...current, { id, message, type }]);

    setTimeout(() => this.remove(id), 5000);
  }

  remove(id: string): void {
    this.toasts.update((current) => current.filter((toast) => toast.id !== id));
  }
}
