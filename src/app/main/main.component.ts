import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {TodoService} from "../todo.service";
import {Todo} from "../models";

@Component({
  selector: 'app-list-titles',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  todoArr: Todo[]
  titles: String[] = [];
  tids: String[] = [];

  constructor(private router: Router,
              private todoSvc: TodoService) { }

  ngOnInit(): void {
    this.getAllTitles()
  }

  go(title: string) {
    this.router.navigate(['/todo', title]);
  }

  async getAllTitles() {
    this.todoArr =  await this.todoSvc.getAll();
    this.titles = this.todoArr.map(v => v.title)
    this.tids = this.todoArr.map(v => v.tid)
  }



}
