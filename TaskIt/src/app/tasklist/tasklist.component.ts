import { Component } from '@angular/core';

@Component({
  selector: 'app-tasklist',
  templateUrl: './tasklist.component.html',
  styleUrls: ['./tasklist.component.css'],
})
export class TasklistComponent {
  // properties
  isOpenModal: boolean = true;
  // currentTasks=[
  //   {title:string,
  //   }
  // ]

  // methods

  onOpenModal() {
this.isOpenModal= true;
  }
}
