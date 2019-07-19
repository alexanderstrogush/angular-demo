import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CategoriesComponent} from './categories/categories.component';
import {CategoryComponent} from './category/category.component';
import {ProductComponent} from './product/product.component';

const routes: Routes = [
  {path: 'categories', component: CategoriesComponent},
  {path: 'category/:id', component: CategoryComponent},
  {path: 'product/:id', component: ProductComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
