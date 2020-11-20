import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TreeviewModule } from 'ngx-treeview';
import { TreeviewSelectComponent } from './treeview-select/treeview-select.component';
import { FormsModule } from '@angular/forms';
import { AdDirective } from './directives/ad.directive';
import { BlankComponent } from './components/blank/blank.component';
import { ListComponent } from './components/list/list.component';
import { ObjectComponent } from './components/object/object.component';



@NgModule({
  declarations: [TreeviewSelectComponent, AdDirective, BlankComponent, ListComponent, ObjectComponent],
  imports: [
    CommonModule,
    TreeviewModule.forRoot(),
    FormsModule
  ],
  exports: [
    TreeviewModule,
    TreeviewSelectComponent,
    AdDirective,
    BlankComponent,
    ListComponent,
    ObjectComponent
  ]
})
export class SharedModule { }
