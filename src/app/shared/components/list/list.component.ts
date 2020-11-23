import { Component, OnInit } from '@angular/core';
import { SchemaBase } from 'src/app/core/SchemaBase';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent extends SchemaBase implements OnInit {

  constructor() { 
    super();
  }

  ngOnInit(): void {
    console.log(this.currentSchema);
  }

}
