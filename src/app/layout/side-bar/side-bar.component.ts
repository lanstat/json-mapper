import { Component, OnInit } from '@angular/core';
import { TreeviewItem } from 'ngx-treeview';

@Component({
  selector: 'app-sidebar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit {
  tables: any[] = [];
  config = {
    hasAllCheckBox: false,
    hasFilter: false,
    hasCollapseExpand: false,
    decoupleChildFromParent: false,
    maxHeight: 500
  };

  items = [new TreeviewItem({
    text: "IT",
    value: 9,
    children: [
      {
        text: "Programming",
        value: 91,
        children: [
          {
            text: "Frontend",
            value: 911,
            children: [
              { text: "Angular 1", value: 9111 },
              { text: "Angular 2", value: 9112 },
              { text: "ReactJS", value: 9113 },
            ],
          },
          {
            text: "Backend",
            value: 912,
            children: [
              { text: "C#", value: 9121 },
              { text: "Java", value: 9122 },
              { text: "Python", value: 9123, checked: false },
            ],
          },
        ],
      },
      {
        text: "Networking",
        value: 92,
        children: [
          { text: "Internet", value: 921 },
          { text: "Security", value: 922 },
        ],
      },
    ],
  })];

  constructor() { }

  ngOnInit(): void {
  }

  onSelectedChange(evt: any) {
    console.log(evt);

  }
}