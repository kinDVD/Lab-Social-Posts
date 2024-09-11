import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { Post } from '../../models/post';

@Component({
  selector: 'app-post-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './post-form.component.html',
  styleUrl: './post-form.component.css'
})
export class PostFormComponent {
  displayForm: boolean = false;
  @Output () Submitted = new EventEmitter<Post>();
  newPost: Post = {} as Post;

  submitPost():void{
    let post: Post = { ...this.newPost};
    this.Submitted.emit(post);
    this.newPost = {} as Post;
  }
}
