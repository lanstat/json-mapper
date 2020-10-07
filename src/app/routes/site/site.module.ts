import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent } from './routes/index/index.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'index', component: IndexComponent }
];

@NgModule({
  declarations: [
    IndexComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class SiteModule { }
