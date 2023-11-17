import { Component, OnInit, EventEmitter, Output } from '@angular/core';

import { FormGroup, FormControl, Validators } from '@angular/forms';

import { TaskService } from 'src/app/shared/task.service';

@Component({
  selector: 'app-task-form-modal',
  templateUrl: './task-form-modal.component.html',
  styleUrls: ['./task-form-modal.component.css'],
})
export class TaskFormModalComponent implements OnInit {
  @Output() closeChild: EventEmitter<void> = new EventEmitter<void>();

  // in strict mode, it forces you to assign properties to values
  newTaskForm: FormGroup = new FormGroup({});
  myDate = new Date();
  closeModal = false;

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.newTaskForm = new FormGroup({
      title: new FormControl(null, Validators.required),
      description: new FormControl(null, ),
      dueDate: new FormControl(null, Validators.required),
      priority: new FormControl(null, Validators.required),
      status: new FormControl(null, Validators.required),
    });
  }
  onSubmit() {
    this.taskService.addTask(this.newTaskForm.value);
    console.log(this.newTaskForm.value);
    this.closeChild.emit();
  }

  cancelAdd() {
    this.closeChild.emit();
  }
}
