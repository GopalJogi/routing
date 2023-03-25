import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CourseComponent } from './course/course.component';
import { CouseDetailsComponent } from './couse-details/couse-details.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { StudentComponent } from './student/student.component';

const routes: Routes = [
  {path:'', redirectTo:'/students',pathMatch:'full'},
  {path:'students',component:StudentComponent},// each route we can treat like a object
  {path:'courses', component:CourseComponent},
  {path:'course1/:id',component:CouseDetailsComponent},
  {path:"**", component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const myRoutings=[StudentComponent,CourseComponent,PageNotFoundComponent,CouseDetailsComponent];

