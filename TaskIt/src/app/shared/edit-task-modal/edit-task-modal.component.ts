import { Component, EventEmitter, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { TaskService } from 'src/app/shared/task.service';

@Component({
  selector: 'app-edit-task-modal',
  templateUrl: './edit-task-modal.component.html',
  styleUrls: ['./edit-task-modal.component.css']
})
export class EditTaskModalComponent {
  @Output() closeChild: EventEmitter<void> = new EventEmitter<void>();

  newTaskForm: FormGroup = new FormGroup({});
  myDate = new Date();
  closeModal = false;








  constructor (private taskService: TaskService) {}


  onSubmit() {
    this.taskService.addTask(this.newTaskForm.value);
    console.log(this.newTaskForm.value);
  }

  cancelAdd() {
    this.closeChild.emit();
  }





}





