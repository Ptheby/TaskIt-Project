import { Injectable } from '@angular/core';
import { Task } from '../tasklist/task.model';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
tasks:Task[]=[]
  constructor() { }

  //read
getTasks() {
  return this.tasks
}

addTask(newTask) {
this.tasks.push(newTask)
}

deleteTask() {

}

updateTask() {

}
editOpenTask() {

}


}
