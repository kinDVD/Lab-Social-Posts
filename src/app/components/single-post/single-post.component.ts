import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Post } from '../../models/post';

@Component({
  selector: 'app-single-post',
  standalone: true,
  imports: [],
  templateUrl: './single-post.component.html',
  styleUrl: './single-post.component.css'
})
export class SinglePostComponent {
  @Input() SinglePost: Post = {} as Post;
  @Output() Deleted = new EventEmitter<Post>();
  
  EmitDelete(){
    this.Deleted.emit(this.SinglePost);
  }

}
