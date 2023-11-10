import { Component } from '@angular/core';
import { Task } from './task.model';

@Component({
  selector: 'app-tasklist',
  templateUrl: './tasklist.component.html',
  styleUrls: ['./tasklist.component.css'],
})
export class TasklistComponent {


  constructor () {}

task1= new Task ('Lawn', 'Mow Lawn',new Date(),'high','done')

  // properties
  isOpenModal: boolean = false;
  activeList=  Task['']=[];


  onOpenModal() {
this.isOpenModal= !this.isOpenModal;
  }
}
