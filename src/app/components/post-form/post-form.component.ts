import { Component, EventEmitter, Output } from '@angular/core';
import { Post } from '../../models/post';

@Component({
  selector: 'app-post-form',
  standalone: true,
  imports: [],
  templateUrl: './post-form.component.html',
  styleUrl: './post-form.component.css'
})
export class PostFormComponent {
  displayForm: boolean = false;
  @Output () Submit = new EventEmitter<Post>();

  emitForm():void{
    let newPost: Post = { ...this.FormItem};
    this.ItemCreated.emit(newItem);
    this.FormItem = {} as Item;
  }
}
