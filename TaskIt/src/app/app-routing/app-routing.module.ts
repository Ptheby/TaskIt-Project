import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TasklistComponent } from '../tasklist/tasklist.component';
import { RouterModule, Routes } from '@angular/router';


const appRoutes: Routes = [
  { path: '', redirectTo: '/tasklist', pathMatch: 'full' },
  { path: 'tasks', component: TasklistComponent}
];



@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(appRoutes)],
  exports:[RouterModule]


})
export class AppRoutingModule {

}
