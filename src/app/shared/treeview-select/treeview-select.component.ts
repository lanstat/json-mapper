import { Component, Input, Output, EventEmitter, ViewChild, OnChanges } from '@angular/core';
import { isNil } from 'lodash';
import { TreeviewI18n, TreeviewItem, TreeviewConfig, TreeviewComponent, TreeviewHelper } from 'ngx-treeview';
import { TreeviewSelectI18n } from './treeview-select-i18n';

@Component({
  selector: 'ngx-treeview-select',
  templateUrl: './treeview-select.component.html',
  styleUrls: [
    './treeview-select.component.scss'
  ],
  providers: [
    { provide: TreeviewI18n, useClass: TreeviewSelectI18n }
  ]
})
export class TreeviewSelectComponent implements OnChanges {
  @Input() config: TreeviewConfig;
  @Input() items: TreeviewItem[];
  @Input() value: any;
  @Output() valueChange = new EventEmitter<any>();
  @ViewChild(TreeviewComponent, { static: false }) treeviewComponent: TreeviewComponent;
  filterText: string;
  private treeviewSelectI18n: TreeviewSelectI18n;

  constructor(
    public i18n: TreeviewI18n
  ) {
    this.config = TreeviewConfig.create({
      hasAllCheckBox: false,
      hasCollapseExpand: false,
      hasFilter: true,
      maxHeight: 500
    });
    this.treeviewSelectI18n = i18n as TreeviewSelectI18n;
  }

  ngOnChanges(): void {
    this.updateSelectedItem();
  }

  select(item: TreeviewItem): void {
    this.selectItem(item);
  }

  private updateSelectedItem(): void {
    if (!isNil(this.items)) {
      const selectedItem = TreeviewHelper.findItemInList(this.items, this.value);
      this.selectItem(selectedItem);
    }
  }

  private selectItem(item: TreeviewItem): void {
    if (this.treeviewSelectI18n.selectedItem !== item) {
      this.treeviewSelectI18n.selectedItem = item;
      if (this.treeviewComponent) {
        // this.treeviewComponent.onSelectedChange([item]);
        // this.treeviewComponent.raiseSelectedChange();
        // this.valueChange.emit(item);
      }

      if (item) {
        if (this.value !== item.value) {
          this.value = item.value;
          this.valueChange.emit(item.value);
        }
      }
    }
  }
}