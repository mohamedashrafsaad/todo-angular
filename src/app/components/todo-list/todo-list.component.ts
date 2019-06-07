import { Component, OnInit } from '@angular/core';
import { TodoDataService } from 'src/app/services/todo-data.service';
import { Todo } from 'src/app/models/todo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
  providers: [TodoDataService]
})
export class TodoListComponent implements OnInit {

  newTodo: Todo = new Todo();
  todos:Array<Todo>;
  isLoaded:boolean;

  constructor(private todoDataService: TodoDataService) {
  }
  addTodo() {
    this.todoDataService.addTodo(this.newTodo).subscribe(res=>{
      this.ngOnInit();
    });
    this.newTodo = new Todo();
  }

  removeTodo(todo) {
    this.todoDataService.deleteTodoById(todo).subscribe(res=>{
      this.ngOnInit();
    });;
  }

  ngOnInit() {
    this.isLoaded=false;
    this.todoDataService.getAllTodos().subscribe(res=>{
      this.todos=res.todos;
      this.isLoaded=true;
    });
  }

}
