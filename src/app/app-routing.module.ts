import { HomeComponent } from "./home/home.component";
import { ListStudentComponent } from "./list-student/list-student.component";
import { UpdateStudentComponent } from "./update-student/update-student.component";
import { CreateStudentComponent } from "./create-student/create-student.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "createStudent", component: CreateStudentComponent },
  { path: "listStudent", component: ListStudentComponent },
  { path: "updateStudent/:id", component: UpdateStudentComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
