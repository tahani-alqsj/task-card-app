import { Component } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import * as $ from 'jquery';
import {Task} from './model/task'
@Component({
  // moduleId:module.id,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  private tasks: Task[] = [];
  private currentTask = new Task(null, false, true);

  addTask(){
    let task = new Task(this.currentTask.content, this.currentTask.completed, this.currentTask.status);
    this.tasks.push(task);
    this.currentTask.content = null;
  }

 
}
