import { Component, Self, forwardRef, Input } from '@angular/core';
import { FormGroup, FormControl, Validators, NgControl, ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'input-text',
  templateUrl: './input-text.component.html',
  styleUrls: ['./input-text.component.css'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => InputTextComponent),
    multi: true
  }]

})
export class InputTextComponent implements ControlValueAccessor {
  // readonly = false;
  @Input()  value: string = '';
  @Input() wording: string = '';
  @Input() type: string = 'text';
  @Input() id: string = '';
  @Input() placeholder: string = 'กรอกข้อมูล';
  @Input() readonly: boolean = false;
  @Input() varidate: boolean = false;
  @Input() iconset: string = 'edit';
  @Input() disabled: boolean = false;

  onChange: (e) => void;
  onTouched: () => void;
  constructor(

  ) { }

  writeValue(value: string): void {
    this.value = value ? value : '';
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

}
