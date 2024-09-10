import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Post } from '../../models/post';
import { PostFormComponent } from '../post-form/post-form.component';
import { SinglePostComponent } from '../single-post/single-post.component';

@Component({
  selector: 'app-social-posts',
  standalone: true,
  imports: [PostFormComponent, SinglePostComponent],
  templateUrl: './social-posts.component.html',
  styleUrl: './social-posts.component.css'
})
export class SocialPostsComponent {
  posts: Post [] = [
    {
      title: "First Post",
      thought: "Hello World!"
    }
  ];

  onSubmit(p:Post):void{
    this.posts.unshift(p);
  }

  toggleDisplay()
}
