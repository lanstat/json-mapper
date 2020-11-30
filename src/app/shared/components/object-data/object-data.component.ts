import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, FormArray, FormBuilder } from '@angular/forms';
import { Property } from '../../models/schemastore';
import {SchemaStoreService} from '../../services/schema-store.service';

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
    values: any
  }>();

  currentProperty: Property;
  renderType: number;
  canSelectMultiple: boolean;

  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private schemaService: SchemaStoreService
  ) {
    this.form = this.formBuilder.group({
      key: null,
      values: this.formBuilder.array([])
    });
  }

  ngOnInit(): void {}

  get values(): FormArray {
    return this.form.get('values') as FormArray;
  }

  get key(): FormControl {
    return this.form.get('key') as FormControl;
  }

  addValue() {
    this.values.push(new FormControl());
  }

  onChangeProperty() {
    this.currentProperty = this.schemaService.getDefinition(this.schema, this.key.value);
    this.parseRenderType();
    this.values.clear();
    if (!this.canSelectMultiple) {
      this.values.push(new FormControl(null));
    }
  }

  onSubmit(evt: any) {
    let tmp: any;

    if (this.canSelectMultiple) {
      tmp = [];
      for (let control of this.values.controls) {
        tmp.push(control.value);
      }
    } else {
      tmp = null;
      for (let control of this.values.controls) {
        tmp = control.value;
      }
    }

    this.changeValueEvent.emit({
      key: this.form.get('key').value,
      values: tmp
    });
  }

  private parseRenderType() {
    this.canSelectMultiple = Array.isArray(this.currentProperty.type);
    if (this.currentProperty.enum) {
      this.renderType = 1;
    } else {
      if (this.currentProperty.type == 'string') {
        this.renderType = 2;
      } else if (this.currentProperty.type == 'boolean') {
        this.renderType = 3;
      }
    }
  }

}
