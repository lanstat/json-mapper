import { Component, forwardRef, Input, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-enum-field',
  templateUrl: './enum-field.component.html',
  styleUrls: ['./enum-field.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => EnumFieldComponent),
      multi: true
    }
  ]
})
export class EnumFieldComponent implements OnInit, ControlValueAccessor {
  @Input()
  items: string[];

  private _onChange: (value)=> void;
  private _onTouched: ()=> void;

  value: string| number;

  constructor() { }

  ngOnInit(): void {
  }

  onChange() {
    this._onChange(this.value);
  }

  writeValue(obj: any): void {
    this.value = obj;
  }

  registerOnChange(fn: any): void {
    this._onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this._onTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    // throw new Error('Method not implemented.');
  }

}
