import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { ListFormComponent } from './list-form/list-form.component';
import { NewFormComponent } from './new-form/new-form.component';
import {ReactiveFormsModule} from "@angular/forms";
import { HeaderComponent } from './header/header.component';
import {TodoService} from "./todo.service";

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    ListFormComponent,
    NewFormComponent,
    HeaderComponent,
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        ReactiveFormsModule
    ],
  providers: [TodoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
