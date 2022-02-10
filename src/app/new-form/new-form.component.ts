import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Todo} from "../models";
import {TodoService} from "../todo.service";

@Component({
  selector: 'app-new-form',
  templateUrl: './new-form.component.html',
  styleUrls: ['./new-form.component.css']
})
export class NewFormComponent implements OnInit {

  form: FormGroup
  initialValue: Todo

  constructor(private fb: FormBuilder,
              private todoSvc: TodoService) {  }

  ngOnInit(): void {
    this.form = this.fb.group({
      title: this.fb.control('', [Validators.required]),
      description: this.fb.control('', [Validators.required]),
      priority: this.fb.control('low', [Validators.required])
    })
    this.initialValue = this.form.value
  }

  onAdd() {
    const todo: Todo = this.form.value as Todo;
    console.info('todo: ', todo);
    this.todoSvc.add(todo)
      .then(id => {
        console.info('>>> id = ', id)
        this.form.reset(this.initialValue)
      })
  }


}
