import { Component, OnInit } from '@angular/core';
import { SchemaBase } from 'src/app/core/SchemaBase';

@Component({
  selector: 'app-object',
  templateUrl: './object.component.html',
  styleUrls: ['./object.component.scss']
})
export class ObjectComponent extends SchemaBase implements OnInit {
  current: {[id:string]: any} = {};

  constructor() { 
    super();
  }

  ngOnInit(): void {
  }

  onRecordStore(evt: {key: string, value: any}) {
    this.current[evt.key] = evt.value;
  }
}
