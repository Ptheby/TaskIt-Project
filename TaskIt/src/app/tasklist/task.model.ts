export class Task {
  title: string;
  description: string;
  dueDate: Date;
  priority: string;
  status: string;
 

  constructor(title: string, description: string, dueDate: Date, priority: string, status: string, action:string) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.status = status;

  }
}
