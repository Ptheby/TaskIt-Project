import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';



import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { TasklistComponent } from './tasklist/tasklist.component';

import { TaskFormModalComponent } from './tasklist/task-form-modal/task-form-modal.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    TasklistComponent,
    TaskFormModalComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
