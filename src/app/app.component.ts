import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Bienvenido a Angular';
  users = ['omar','antonio','oscar','david','Mayra'];

  name: string = 'Omar Antonio';
  age: number;
  address:{
    street: string;
    city: string;
  };
  hobbies:string[];
 
  constructor(){
    this.age = 28;
    this.address = {
      street : '22145 B adc',
      city : 'Peru'
    };
    this.hobbies = ['nadar','leer','comer'];
  }
}
