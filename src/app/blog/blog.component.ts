import { TasksService } from '../services/tasks.service';
import { Error404 } from '../common/error-404';
import { NotFoundError } from '../common/not-found-error';
import { AppError } from '../common/app.error';
import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  tasks: any;
  constructor(private _postsService: TasksService) {
  }

  ngOnInit() {
    this._postsService.getAll()
    .subscribe(tasks => {
       this.tasks = tasks;
    }, error => {
      alert('An unexpected error occured');
    });
  }

  addTask(newtask: HTMLInputElement) {
    let task = { "title": newtask.value, "isDone": false };
    this._postsService.create({ title: newtask.value, isDone: false })
      .subscribe(
        res => {
          task['_id'] = res._id;
          this.tasks.splice(0,0,task);
        }, 
        (error: AppError) => {
          if (error instanceof Error404)
            alert('Bot blin!')
          else alert('An unexpected error occured');
        });
    newtask.value='';
  }

  removeTask(task) {
    this._postsService.delete(task._id)
    .subscribe(
      res => {
      let index = this.tasks.indexOf(task);
      this.tasks.splice(index, 1);
      }, 
      (error: AppError) => {
        if (error instanceof NotFoundError) 
          alert('this post has already been deleted');
        else alert('An unexpected error occured');
    ``});
  }

  updateTask(task, newdata: HTMLInputElement) { 
    let updtask = { "title": newdata.value, "isDone": task.isDone};
    this._postsService.update(task._id, { title: newdata.value, isDone: task.isDone })
      .subscribe(res => {
        updtask['_id'] = task._id;
        let index = this.tasks.indexOf(task);
        this.tasks.splice(index, 1, updtask);
      }, error => {
        alert('An unexpected error occured');
      });
  }

}
