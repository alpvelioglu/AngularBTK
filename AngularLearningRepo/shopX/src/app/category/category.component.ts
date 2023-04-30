import { Component } from '@angular/core';
import { CategoryService } from '../services/category.service';
import { Category } from './category';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
  providers: [CategoryService],
})
export class CategoryComponent {
  title = 'Kategoriler';
  categories: Category[];

  constructor(
    private categoryService: CategoryService
  ) {}

  ngOnInit()
  {
    this.categoryService.getCategories().subscribe(data => {
      this.categories = data
    });
  }
}
