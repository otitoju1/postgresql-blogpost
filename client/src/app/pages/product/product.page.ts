import { Component, OnInit, } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { BlogService } from 'src/app/services/blog.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.page.html',
  styleUrls: ['./product.page.scss'],
})
export class ProductPage implements OnInit {
  post:any = {};
  products = [];
  comments = [];
  post_id  = null;
  commentData: any = {
    name: '',
    content: ''
  };

  constructor(
    private blogService: BlogService, 
    private activatedRoute: ActivatedRoute, 
    private toastController: ToastController,
    private route: Router,
    ) {

   }

  ngOnInit() {
    this.getPost();
  }

  getPost() {
    this.activatedRoute.paramMap.subscribe( paramMap => {
      if(!paramMap.has('postId')) {
        return;
      }
      const postId = paramMap.get('postId');
      this.blogService.get(`/api/v1/post/${postId}`).subscribe((post:any) => {
        this.post  = post.info;
        this.comments = post.info.comments;
        this.post_id = postId;
      });
      
    });
  }

  
  validateInputs() {
    let name = this.commentData.name.trim()
    let message = this.commentData.content.trim()
    return (
      this.commentData.content && this.commentData.content && name.length > 0 && message.length > 0
    )
  }

  handleComment() {
    if(this.validateInputs()) {
      this.blogService.post(`/api/v1/post/comment/${this.post_id}`, this.commentData).subscribe((res: any) => {
        this.toast("Comment successfully added", "success");
        this.getPost();
      });
    }
    else {
      this.toast("Please fill all empty fields.", "danger");
    }
  }

  async toast(msg:any, color:any) {
    const toast = await this.toastController.create({
      header: 'COMMENT INFORMATION',
      message: msg,
      icon: 'information-circle',
      duration: 4000,
      position: 'top',
      color: color
    });
    await toast.present();
  }

  signin() {
    this.route.navigate(['/login']);
  }
}
