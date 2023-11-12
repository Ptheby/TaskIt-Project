import { Injectable } from '@angular/core';
import { Task } from '../tasklist/task.model';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
tasks:Task[]=[{title:'Mow',description:'Mow Lawn',priority:'Low',status:'To Do',dueDate: new Date('11/11/2023')}]
  constructor() { }

  //read
getTasks() {
  return this.tasks
}

addTask() {
 tasks = this.newTaskForm
}

deleteTask() {

}

updateTask() {

}
editOpenTask() {

}


}
