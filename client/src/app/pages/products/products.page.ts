import { Component, OnInit } from '@angular/core';
import { BlogService } from 'src/app/services/blog.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.page.html',
  styleUrls: ['./products.page.scss'],
})
export class ProductsPage implements OnInit {
  posts = [];

  constructor(private blogService: BlogService) { }

  ngOnInit() {
    this.blogService.get('').subscribe((response:any) => {
      this.posts = response;
    });
  }

}
