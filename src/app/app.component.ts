import { Component } from '@angular/core';

@Component({
  selector: 'app-root', // component Directive
  templateUrl: './app.component.html',
  // template: '<h1>test</h1>', // on small change or tag
  styleUrls: ['./app.component.css'],
  // styles: ['h1{color:red}'],// on small change
})
export class AppComponent {
  title = 'CourseDemo';
  /**
   *
   */
  // constructor() {
  //   this. ChangeTitle();
    
  // }
 
    ChangeTitle() {
    setTimeout(() => {
      this.title='Emran' ;
    }, 5000);
  };
}
