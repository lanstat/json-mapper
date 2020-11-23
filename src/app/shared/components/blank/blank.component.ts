import { Component, OnInit } from '@angular/core';
import { SchemaBase } from 'src/app/core/SchemaBase';

@Component({
  selector: 'app-blank',
  templateUrl: './blank.component.html',
  styleUrls: ['./blank.component.scss']
})
export class BlankComponent extends SchemaBase implements OnInit {

  constructor() { 
    super();
  }

  ngOnInit(): void {
  }

}
