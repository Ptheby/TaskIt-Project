import { Injectable } from '@angular/core';
import { Task } from '../tasklist/task.model';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
tasks:Task[]=[{
 title: "title",
 description : "description",
 dueDate : new Date(),
 priority : "priority",
 status :"status",

}]
  constructor() { }

  //read
getTasks() {
  return this.tasks
}

addTask(newTask) {
this.tasks.push(newTask)
}

deleteTask(i) {
this.tasks.splice(i);
return this.tasks
}

updateTask() {

}
editOpenTask() {

}


}
