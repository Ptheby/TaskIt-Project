import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { TaskService } from 'src/app/shared/task.service';
import { Task } from 'src/app/tasklist/task.model';

@Component({
  selector: 'app-edit-task-modal',
  templateUrl: './edit-task-modal.component.html',
  styleUrls: ['./edit-task-modal.component.css']
})
export class EditTaskModalComponent implements OnInit {
  @Output() closeChild: EventEmitter<void> = new EventEmitter<void>();
  editTask:Task;

  newTaskForm: FormGroup = new FormGroup({});
  myDate = new Date();
  closeModal = false;




ngOnInit(): void {
this.editTask=this.taskService.editTask
console.log("fromModal",this.editTask)
}



  constructor (private taskService: TaskService) {}


  onSubmit() {
    this.taskService.addTask(this.newTaskForm.value);
    console.log(this.newTaskForm.value);
    this.closeChild.emit();
  }

  cancelAdd() {
    this.closeChild.emit();
  }





}





