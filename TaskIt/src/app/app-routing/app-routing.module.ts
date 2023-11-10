import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TasklistComponent } from '../tasklist/tasklist.component';
import { Routes } from '@angular/router';


const appRoutes: Routes = [
  { path: '', redirectTo: '/tasklist', pathMatch: 'full' },
  { path: 'tasks', component: TasklistComponent}
];



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class AppRoutingModule {

}
