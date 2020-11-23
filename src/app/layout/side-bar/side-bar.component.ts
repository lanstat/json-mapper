import { Component, OnInit } from '@angular/core';
import { TreeviewItem } from 'ngx-treeview';
import { ListComponent } from 'src/app/shared/components/list/list.component';
import { Collection, CollectionType } from 'src/app/shared/models/collection';
import { CollectionService } from 'src/app/shared/services/collection.service';
import { SchemaStoreService } from 'src/app/shared/services/schema-store.service';
import { ViewManagerService } from 'src/app/shared/services/view-manager.service';

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

  constructor(private schema: SchemaStoreService, private _viewManager: ViewManagerService) { }

  ngOnInit(): void {
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
    // this._viewManager.show({
    //   component: ListComponent
    // })
  }
}
