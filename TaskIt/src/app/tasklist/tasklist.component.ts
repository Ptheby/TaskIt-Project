import { Component, OnInit } from '@angular/core';
import { Task } from './task.model';
import { TaskService } from '../shared/task.service';
import { TaskFormModalComponent } from './task-form-modal/task-form-modal.component';

@Component({
  selector: 'app-tasklist',
  
  templateUrl: './tasklist.component.html',
  styleUrls: ['./tasklist.component.css'],
})
export class TasklistComponent implements OnInit{
tasks:Task[]= [];


  constructor (private taskService: TaskService) {}


  ngOnInit(): void {
this.tasks=this.taskService.getTasks();
console.log(this.tasks)
  }

  // properties
  isOpenModal: boolean = false;



  onOpenModal() {
this.isOpenModal= !this.isOpenModal;

  }
}
