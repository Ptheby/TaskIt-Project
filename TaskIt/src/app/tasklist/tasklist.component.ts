import { Component, OnInit } from '@angular/core';
import { Task } from './task.model';
import { TaskService } from '../shared/task.service';


@Component({
  selector: 'app-tasklist',

  templateUrl: './tasklist.component.html',
  styleUrls: ['./tasklist.component.css'],
})
export class TasklistComponent implements OnInit {
  tasks: Task[] = [];

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.tasks = this.taskService.getTasks();
    console.log(this.tasks);
  }

  // properties
  isOpenModal: boolean = false;
  isOpenEdit:boolean= false;

  onOpenModal() {
    this.isOpenModal = !this.isOpenModal;
  }
  onOpenEdit(i) {
    this.isOpenEdit=true;
  }
}
