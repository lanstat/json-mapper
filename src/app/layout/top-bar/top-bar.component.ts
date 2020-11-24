import { Component, OnInit } from '@angular/core';
import { ObjectComponent } from 'src/app/shared/components/object/object.component';
import { SchemaStoreService } from 'src/app/shared/services/schema-store.service';
import { ViewManagerService } from 'src/app/shared/services/view-manager.service';
import {aux } from './test';

@Component({
  selector: 'app-topbar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss']
})
export class TopBarComponent implements OnInit {

  constructor(private schema: SchemaStoreService, private viewManager: ViewManagerService) { }

  ngOnInit(): void {
  }

  async create() {
    await this.schema.load(JSON.stringify(aux));
    this.viewManager.show({
      component: ObjectComponent,
      schema: this.schema.getSchema()
    });
  }

  open() {

  }
}
