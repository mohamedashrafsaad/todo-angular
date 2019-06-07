import { Injectable } from '@angular/core';
import { Todo } from '../models/todo';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoDataService {
  lastId: number = 0;

  todos: Todo[] = [];
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    })
  }
  constructor(protected httpClient: HttpClient) { }

  addTodo(todo: Todo): Observable<any> {
    console.log(JSON.stringify(todo))
    return this.httpClient.post<any>('https://mohamedtest2.herokuapp.com/todo', JSON.stringify(todo), this.httpOptions);
  }

  deleteTodoById(todo: Todo): Observable<any> {
    return this.httpClient.delete<any>('https://mohamedtest2.herokuapp.com/'+todo['_id']);
  }

  getAllTodos(): Observable<any> {
    return this.httpClient.get('https://mohamedtest2.herokuapp.com/todo');
  }
}
