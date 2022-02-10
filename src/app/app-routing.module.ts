import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MainComponent} from "./main/main.component";
import {ListFormComponent} from "./list-form/list-form.component";
import {NewFormComponent} from "./new-form/new-form.component";

const routes: Routes = [
  {path: '', component: MainComponent},
  {path: 'todo/:id', component: ListFormComponent},
  {path: 'add', component: NewFormComponent},
  {path: '**', redirectTo: '/', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
