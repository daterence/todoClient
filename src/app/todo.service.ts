import {Injectable} from "@angular/core";
import Dexie from "dexie";
import {v4 as uuidv4} from 'uuid'
import {Todo} from "./models";

@Injectable()
export class TodoService extends Dexie {
  todoTable: Dexie.Table<Todo, String>
  todo: Todo

  constructor() {
    super('todo-db');

    this.version(1).stores({
      todo: 'tid'
    })
    this.todoTable = this.table('todo')
  }

  public add(todo: Todo): Promise<String> {
    todo.tid = uuidv4().toString().substring(0, 8);
    return this.todoTable.put(todo as Todo)
  }

  public async getAll(): Promise<Todo[]> {
    const t = await this.todoTable.toArray();
    return t
  }

  public async get(id: string): Promise<Todo> {
    return <Promise<Todo>>this.todoTable.get(id);
  }


  public deleteItem(id: string) {
    this.todoTable.delete(id);
    console.info("Item deleted")
  }

  public update(id: string, todo: Todo) {
    this.todoTable.update(id, {title: todo.title, description: todo.description, priority: todo.priority});
    console.log('ID' + id + ' Update completed')
  }
}
