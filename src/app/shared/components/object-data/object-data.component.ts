import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Property } from '../../models/schemastore';

@Component({
  selector: 'app-object-data',
  templateUrl: './object-data.component.html',
  styleUrls: ['./object-data.component.scss']
})
export class ObjectDataComponent implements OnInit {
  @Input()
  schema: Property;

  @Output()
  changeValueEvent = new EventEmitter<{
    key: string,
    value: any
  }>();

  currentProperty: Property;
  renderType: number;

  form: FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.form = new FormGroup({
      key: new FormControl(null),
      value: new FormControl(null)
    });
  }

  onChangeProperty() {
    this.currentProperty = this.schema.properties[this.form.get('key').value];
    this.renderType = this.getRenderType();
  }

  canSelectMultiple() {
    return Array.isArray(this.currentProperty.type);
  }

  onSubmit(evt: any) {
    console.log(this.form.get('value'));
    this.changeValueEvent.emit({
      key: this.form.get('key').value,
      value: this.form.get('value').value
    });
  }

  private getRenderType(): number {
    if (this.currentProperty.enum) {
      return 1;
    } else {
      if (this.currentProperty.type == 'string') {
        return 2;       
      } else if (this.currentProperty.type == 'boolean') {
        return 3;
      }
    }
  }

}