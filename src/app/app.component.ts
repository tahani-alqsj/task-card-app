import { Component } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import * as $ from 'jquery';
import {Task} from './model/task'
@Component({
  moduleId:module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})
export class AppComponent {
  title = 'app';
  private tasks = [
    new Task(
      "buy a monkey",
      false
    ),

    new Task(
      "walk a turtule",
      false
    )
  ]
  private currentTask = new Task(null, false);
}
