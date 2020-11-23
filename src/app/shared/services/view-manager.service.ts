import { Injectable } from '@angular/core';
import { Observable, Subscriber } from 'rxjs';
import { BlankComponent } from '../components/blank/blank.component';
import { ViewComponent } from '../models/view';
import { SchemaStoreService } from './schema-store.service';

@Injectable({
  providedIn: 'root'
})
export class ViewManagerService {
  private _currentView: ViewComponent;
  private _currentObserver: Subscriber<unknown>;

  constructor(private schema: SchemaStoreService) { 
    this._currentView = {
      component: BlankComponent,
      schema: null
    };
  }

  show(view: ViewComponent) {
    this._currentView = view;
    this._currentObserver.next(this._currentView);
  }

  currentViewChange(): Observable<ViewComponent> {
    return new Observable((observer) => {
      this._currentObserver = observer;
      this._currentObserver.next(this._currentView);
      return {
        unsubscribe() {
        }
      };
    });
  }

  getCurrentProperty() {
    return this.schema.getSchema();
  }
}
