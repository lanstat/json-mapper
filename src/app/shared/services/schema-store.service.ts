import { Injectable } from '@angular/core';
import { Schema, Property } from '../models/schemastore';
import {PropertyDefinition} from '../models/collection';

@Injectable({
  providedIn: 'root'
})
export class SchemaStoreService {
  private schema: Schema;

  constructor() { }

  load(text:string) {
    this.schema = JSON.parse(text);
  }

  getSchema() {
    return this.schema;
  }

  getDefinition(current: Property, key: string) {
    let tmp = current.properties[key];
    if (tmp.$ref) {
      let pointer: any = null;
      let parts = tmp.$ref.split('/');
      for (let part of parts) {
        if(part === '#') {
          pointer = this.schema;
        } else {
          pointer = pointer[part];
        }
      }

      tmp = Object.assign(pointer, tmp);
    }
    return new PropertyDefinition(tmp);
  }
}
