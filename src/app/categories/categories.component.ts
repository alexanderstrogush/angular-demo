import { Component, OnInit } from '@angular/core';
import {CategoryService} from '../_service/category.service';
import {Category} from '../_model/category-model';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  categories: Array<Category> = [];
  errMsg: string;

  constructor(private categoryService: CategoryService) { }

  ngOnInit() {
    this.categoryService.getAll().subscribe(
      res => {
        this.categories = res;
      },
      error => {
        this.errMsg = error.error;
      }
    );
  }

}
