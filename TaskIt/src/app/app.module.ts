import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { TasklistComponent } from './tasklist/tasklist.component';

import { TaskFormModalComponent } from './shared/task-form-modal/task-form-modal.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { KanbanBoardComponent } from './kanban-board/kanban-board.component';
import { RouterModule } from '@angular/router';
import { EditTaskModalComponent } from './shared/edit-task-modal/edit-task-modal.component';




@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    TasklistComponent,
    TaskFormModalComponent,
    KanbanBoardComponent,
    EditTaskModalComponent,


  ],
  imports: [BrowserModule, FormsModule, ReactiveFormsModule, RouterModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
