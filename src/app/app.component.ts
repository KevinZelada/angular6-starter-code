import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public journals = [];
  public newBlog = {
    title: '',
    content: ''
  };

  // add a function to add to blogs
}
