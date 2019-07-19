import {Component, OnInit} from '@angular/core';
import {Category} from '../_model/category-model';
import {CategoryService} from '../_service/category.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  public categoryId: string;
  public category: Category;

  constructor(private route: ActivatedRoute , private categoryService: CategoryService) {
  }

  ngOnInit() {
    this.categoryId = this.route.snapshot.paramMap.get('id');

    this.categoryService.getById(this.categoryId).subscribe(
      res => {
        this.category = res;
      }
    );
  }

}
