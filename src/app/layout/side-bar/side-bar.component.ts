import { Component, OnInit } from '@angular/core';
import { TreeviewItem } from 'ngx-treeview';
import { Collection, CollectionType } from 'src/app/shared/models/collection';
import { CollectionService } from 'src/app/shared/services/collection.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit {
  config = {
    hasAllCheckBox: false,
    hasFilter: false,
    hasCollapseExpand: false,
    decoupleChildFromParent: false,
    maxHeight: 500
  };
  
  items: TreeviewItem[] = [];

  constructor(private _collections: CollectionService) { }

  ngOnInit(): void {
    this._collections.onCollectionChange().subscribe((collections)=> {
      this.items = [];
      this.transformToTreeview(collections, this.items);
    });
  }

  private transformToTreeview(collections: Collection[], items: TreeviewItem[]) {
    for (let item of collections) {
      if (item.type == CollectionType.PRIMITIVE) {
        continue;
      }

      let instance = new TreeviewItem({text: item.name, value: item});
      let children = [];
      this.transformToTreeview(item.fields, children);

      if (children.length > 0) {
        instance.children = children;
      }
      items.push(instance);
    }
  }

  treeviewChange(evt: any) {
    console.log(evt);
  }

  addCollection() {
    this._collections.add(new Collection('asdasd',  'asdasd', CollectionType.PRIMITIVE));
  }
}
