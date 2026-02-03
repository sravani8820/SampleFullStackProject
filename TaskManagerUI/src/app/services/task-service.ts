import { inject, Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TaskItem } from '../models/task-item';

@Injectable({
  providedIn: 'root', 
})
export class TaskService implements OnInit{

  http=inject(HttpClient);
  //data$=new Observable();

  ngOnInit(): void {
   
  }

  GetTasksData():Observable<TaskItem[]>
  {
    return this.http.get<TaskItem[]>("http://localhost:5041/api/tasks").pipe()
  }

  



}
