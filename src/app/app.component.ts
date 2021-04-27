import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hello-world';
  source = "https://images-na.ssl-images-amazon.com/images/I/51oW-Q2unWL._AC_SX466_.jpg";
  number = 3;
  test = true;
  
  handleClick(){
    this.title = "Hello from Button !!";
  }
  handleClick2(){
    this.title = "Nop not this one !!";
  }

}


