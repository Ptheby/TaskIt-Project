import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-task-form-modal',
  templateUrl: './task-form-modal.component.html',
  styleUrls: ['./task-form-modal.component.css'],
})
export class TaskFormModalComponent implements OnInit {
  // in strict mode, it forces you to assign properties to values
  newTaskForm: FormGroup = new FormGroup({});

  constructor() {}

  ngOnInit(): void {
    this.newTaskForm = new FormGroup({
      title: new FormControl('Title', Validators.required),
      description: new FormControl('Description', Validators.required),
      dueDate: new FormControl(null, Validators.required),
      priority: new FormControl('Medium', Validators.required),
      status: new FormControl('To Do', Validators.required),
    });
  }
  onSubmit() {

  };

  cancelAdd() {
    
  }
}
