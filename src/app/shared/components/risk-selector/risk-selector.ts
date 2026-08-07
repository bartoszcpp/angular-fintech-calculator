import { Component, forwardRef, signal } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-risk-selector',
  standalone: true,
  templateUrl: './risk-selector.html',
  styleUrl: './risk-selector.scss',
  //Treat this component as a form input
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => RiskSelectorComponent),
      multi: true,
    },
  ],
})
export class RiskSelectorComponent implements ControlValueAccessor {
  value = signal<number>(1.0);
  isDisabled = signal<boolean>(false);

  private onChange: (value: number) => void = () => {};
  private onTouched: () => void = () => {};

  options = [
    { label: 'Low', value: 1.0 },
    { label: 'Medium', value: 1.2 },
    { label: 'High', value: 1.6 },
  ];

  selectOption(newValue: number): void {
    if (this.isDisabled()) return;

    this.value.set(newValue);
    this.onChange(newValue);
    this.onTouched();
  }

  writeValue(obj: number | null | undefined): void {
    if (obj !== undefined && obj !== null) {
      this.value.set(obj);
    }
  }

  registerOnChange(fn: (value: number) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.isDisabled.set(isDisabled);
  }
}
