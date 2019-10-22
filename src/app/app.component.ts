import { Component } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Bienvenido a Angular';
  users: string[] = ['omar','antonio','oscar','david','Mayra'];
  posts = [];

  name: string = 'Omar Antonio';
  age: number;
  address:{
    street: string;
    city: string;
  };
  hobbies:string[];
 
  constructor(private service :DataService){
    this.service.getData().subscribe(data=>{
      this.posts = data;
    });
    this.age = 28;
    this.address = {
      street : '22145 B adc',
      city : 'Peru'
    };
    this.hobbies = ['nadar','leer','comer'];
  }

  deleteUser(user: String){
    let indice:number = 0;
    this.users.forEach(element => {
      if(element==user){
        this.users.splice(indice,1);
      }
      indice ++;
    });
  }

  addUser(newUser){
    console.log(newUser.value);
    this.users.push(newUser.value);
    newUser.value='';
    newUser.focus();
    return false;
  }
}
