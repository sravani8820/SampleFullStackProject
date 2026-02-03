import { Component, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TaskService } from './services/task-service';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { TaskItem } from './models/task-item';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,AsyncPipe],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  store$=new Observable<TaskItem[]>()

  //protected readonly title = signal('TaskManagerUI');
  constructor(private service:TaskService)
  {
    this.store$= this.service.GetTasksData();
    
  }
 
  

}
