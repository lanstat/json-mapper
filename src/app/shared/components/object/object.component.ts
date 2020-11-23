import { Component, OnInit } from '@angular/core';
import { SchemaBase } from 'src/app/core/SchemaBase';

@Component({
  selector: 'app-object',
  templateUrl: './object.component.html',
  styleUrls: ['./object.component.scss']
})
export class ObjectComponent extends SchemaBase implements OnInit {

  constructor() { 
    super();
  }

  ngOnInit(): void {
    console.log(this.currentSchema);
  }

}
