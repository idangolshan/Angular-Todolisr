import { Component } from '@angular/core';
import {Todo} from "./todo";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'angular-firstApp';
  todos: Todo[];
  constructor () {
    this.todos = [];
  }

  //צריך להשלים את הפונקציה שדוחפת טודוס ולהגדיר מי הוא כל טודו

  addTodo() {
    this.todos.push(todo)
    //the todo
  }

}
