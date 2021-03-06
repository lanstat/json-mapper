import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, FormArray, FormBuilder } from '@angular/forms';
import { Property } from '../../models/schemastore';
import {SchemaStoreService} from '../../services/schema-store.service';
import {PropertyDefinition} from '../../models/collection';

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

  definition: PropertyDefinition;
  renderType: number;

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
    this.definition = this.schemaService.getDefinition(this.schema, this.key.value);
    this.values.clear();
    if (!this.definition.canSelectMultiple) {
      this.values.push(new FormControl(null));
    }
  }

  onSubmit(evt: any) {
    let tmp: any;

    if (this.definition.canSelectMultiple) {
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
}
