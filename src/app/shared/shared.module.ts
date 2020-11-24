import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TreeviewModule } from 'ngx-treeview';
import { TreeviewSelectComponent } from './treeview-select/treeview-select.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdDirective } from './directives/ad.directive';
import { BlankComponent } from './components/blank/blank.component';
import { ListComponent } from './components/list/list.component';
import { ObjectComponent } from './components/object/object.component';
import { ObjectDataComponent } from './components/object-data/object-data.component';
import { EnumFieldComponent } from './components/enum-field/enum-field.component';
import { InputFieldComponent } from './components/input-field/input-field.component';
import { BooleanFieldComponent } from './components/boolean-field/boolean-field.component';



@NgModule({
  declarations: [TreeviewSelectComponent, AdDirective, BlankComponent, ListComponent, ObjectComponent, ObjectDataComponent, EnumFieldComponent, InputFieldComponent, BooleanFieldComponent],
  imports: [
    CommonModule,
    TreeviewModule.forRoot(),
    FormsModule,
    ReactiveFormsModule
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
