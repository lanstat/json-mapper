import { Component, Input, OnInit } from '@angular/core';
import { Property } from '../../models/schemastore';

@Component({
  selector: 'app-object-field',
  templateUrl: './object-field.component.html',
  styleUrls: ['./object-field.component.scss']
})
export class ObjectFieldComponent implements OnInit {
  @Input()
  schema: Property;

  properties: string[] = [];

  form: {
    key: string,
    value: any
  } = <any>{};

  constructor() { }

  ngOnInit(): void {
    for (let p in this.schema.properties) {
      this.properties.push(p);
    }
  }

  onChangeProperty() {
    console.log(this.form);
  }

}