import { Component, OnInit } from '@angular/core';
import { BlogService } from 'src/app/services/blog.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-products',
  templateUrl: './products.page.html',
  styleUrls: ['./products.page.scss'],
})
export class ProductsPage implements OnInit {
  posts = [];
  searchString: string = '';

  constructor(private blogService: BlogService, private route: Router,) { }

  ngOnInit() {
    this.blogService.get('/api/v1/posts').subscribe((response:any) => {
      this.posts = response.info;
      console.log(response);
    });
  }

  signin() {
    this.route.navigate(['/login']);
  }

}
