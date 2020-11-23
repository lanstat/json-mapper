import { PropertyRead } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Property, Schema } from '../models/schemastore';

@Injectable({
  providedIn: 'root'
})
export class SchemaStoreService {
  private schema: Schema;

  constructor() { }

  load(text: string) {
    this.schema = JSON.parse(text);
  }

  getSchema() {
    return this.schema;
  }
}
