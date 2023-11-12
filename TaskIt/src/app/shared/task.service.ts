import { Injectable } from '@angular/core';
import { Task } from '../tasklist/task.model';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
tasks:Task[]=[{title:'',description:'',priority:'',status:'',dueDate: new Date('11/11/2023')}]
  constructor() { }

  //read
getTasks() {
  return this.tasks
}

addTask() {

}

deleteTask() {

}

updateTask() {

}
editOpenTask() {

}


}
