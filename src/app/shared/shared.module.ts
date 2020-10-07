import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TreeviewModule } from 'ngx-treeview';
import { TreeviewSelectComponent } from './treeview-select/treeview-select.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [TreeviewSelectComponent],
  imports: [
    CommonModule,
    TreeviewModule.forRoot(),
    FormsModule
  ],
  exports: [
    TreeviewModule,
    TreeviewSelectComponent
  ]
})
export class SharedModule { }
