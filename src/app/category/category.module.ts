import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoryRoutingModule } from './category-routing.module';
import { CategoryCreateComponent } from './category-create/category-create.component';
import { CategoryEditComponent } from './category-edit/category-edit.component';
import { CategoryDeleteComponent } from './category-delete/category-delete.component';
import { CategoryListComponent } from './category-list/category-list.component';


@NgModule({
  declarations: [
    CategoryCreateComponent,
    CategoryEditComponent,
    CategoryDeleteComponent,
    CategoryListComponent
  ],
  imports: [
    CommonModule,
    CategoryRoutingModule
  ]
})
export class CategoryModule { }
