import { Component, OnInit } from '@angular/core';
import { TasklistComponent } from '../tasklist.component';
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
  Form,
} from '@angular/forms';


@Component({
  selector: 'app-task-form-modal',
  templateUrl: './task-form-modal.component.html',
  styleUrls: ['./task-form-modal.component.css'],
})
export class TaskFormModalComponent implements OnInit {
  // in strict mode, it forces you to assign properties to values
  newTaskForm: FormGroup = new FormGroup({});
  myDate = new Date()

  constructor() {}

  ngOnInit(): void {


  this.newTaskForm = new FormGroup({
      title: new FormControl('Title', Validators.required),
      description: new FormControl('Description', Validators.required),
      dueDate: new FormControl("Due Date", Validators.required),
      priority: new FormControl('Medium', Validators.required),
      status: new FormControl('To Do', Validators.required),
    });
  }
  onSubmit() {
console.log(this.newTaskForm)
  };

  cancelAdd() {

  }
}
