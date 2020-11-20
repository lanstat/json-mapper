import { Component } from '@angular/core';
import { CollectionService } from './shared/services/collection.service';
import { SchemaStoreService } from './shared/services/schema-store.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public constructor() {  }
}
