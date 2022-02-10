import {Component, OnInit} from '@angular/core';
import {Todo} from "../models";
import {ActivatedRoute, Router} from "@angular/router";
import {FormBuilder, FormGroup} from "@angular/forms";
import {TodoService} from "../todo.service";

@Component({
  selector: 'app-list-form',
  templateUrl: './list-form.component.html',
  styleUrls: ['./list-form.component.css']
})
export class ListFormComponent implements OnInit {

  form: FormGroup
  todo: Todo;
  title = '';
  tid: string
  description = ''
  priority = ''

  constructor(private route: ActivatedRoute,
              private fb: FormBuilder,
              private todoSvc: TodoService,
              private router: Router) {
  }
  // async method
  // async ngOnInit() {
  //   this.tid = this.route.snapshot.params['id'];
  //   this.form = this.createForm()
  //   await this.getDetails(this.tid);
  //   this.form = this.createForm()
  // }

  ngOnInit() {
    this.tid = this.route.snapshot.params['id'];
    this.getDetails(this.tid);
    this.form = this.createForm()
  }

  private createForm() {
    return this.fb.group({
      title: this.fb.control(this.title),
      description: this.fb.control(this.description),
      priority: this.fb.control(this.priority),
    });
  }

/*  async method
  async getDetails(id: string): Promise<void> {
    this.todo = await this.todoSvc.get(id)
    this.title = this.todo.title
    this.description = this.todo.description
    this.priority = this.todo.priority
  }*/

  getDetails(id: string) {
    this.todoSvc.get(id)
      .then(todo => {
        this.todo = todo
        this.form.reset(this.todo)
        this.title = this.todo.title
      })
  }

  onUpdate() {
    this.todo = this.form.value;
    this.todoSvc.update(this.tid, this.todo);
  }

  onDelete() {
    console.log(this.tid);
    this.todoSvc.deleteItem(this.tid);
    this.router.navigate(['']).then();
  }

}
