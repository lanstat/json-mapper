import { Injectable } from '@angular/core';
import { Observable, Subscriber } from 'rxjs';
import { Collection, CollectionType } from 'src/app/shared/models/collection';

@Injectable({
  providedIn: 'root'
})
export class CollectionService {
  private _collections: Collection[] = [];
  private _collectionObserver: Subscriber<unknown>;

  constructor() { }

  parse(raw: string): any {
    let data = JSON.parse(raw.trim());

    this.explorer(data, this._collections);
    if (this._collectionObserver) {
      this._collectionObserver.next(this._collections);
    }
  }

  add(collection: Collection) {
    this._collections.push(collection);
    this._collectionObserver.next(this._collections);
  }

  private explorer(data: any, collections: Collection[]) {
    if (typeof data['__mapperVer'] === 'undefined') {
      for (let key in data) {
        if (typeof data[key] === 'undefined') {
          continue;
        }
        if (typeof data[key] === 'object') {
          let isArray = Array.isArray(data[key]);
          let section = new Collection(key, '', isArray? CollectionType.ARRAY: CollectionType.OBJECT);
          collections.push(section);

          if (!isArray) {
            this.explorer(data[key], section.fields);
          }
        } else {
          collections.push(new Collection(key, '', CollectionType.PRIMITIVE));
        }
      }
    }
  }

  public get collections() {
    return this.collections;
  }

  public onCollectionChange(): Observable<Collection[]> {
    return new Observable((observer) => {
        this._collectionObserver = observer;
        this._collectionObserver.next(this._collections);
        return {
          unsubscribe() {
          }
        };
    });
  }
}
