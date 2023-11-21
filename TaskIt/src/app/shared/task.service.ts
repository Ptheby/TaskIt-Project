import { Injectable } from '@angular/core';
import { Task } from '../tasklist/task.model';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
editTask:Task;
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
  if(window.confirm("Are you sure you want to delete?"+i)) {
this.tasks.splice(i);
return this.tasks
}else {return this.tasks}}

updateTask(i) {

}
editOpenTask(task:Task) {
this.editTask=task
}


}
