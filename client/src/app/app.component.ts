import { NgIf } from '@angular/common';
import { Component, Output, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { CardComponent } from './components/card/card.component';
import { TaskService } from './service/task.service';
import { IAddTask, ITask } from './interface/task.interface';

@Component({
  selector: 'app-root',
  imports: [FormsModule, NgIf, CardComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {
  constructor(private taskService: TaskService) {}

  @ViewChild('taskForm') taskForm!: NgForm;

  taskDetails: IAddTask = {
    title: '',
    description: '',
  };
  isEdit = false;
  taskList: ITask[] = [];

  ngOnInit() {
    this.getTasks();
    this.isEdit = false;
  }

  getTasks() {
    this.taskService.getAllTask().subscribe((data) => {
      this.taskList = data;
    });
  }

  editTask(details: ITask) {
    setTimeout(() => { 
      this.taskForm.setValue({
        title: details.title,
        description: details.description,
      });
    });
    this.taskDetails = details;
    this.isEdit = true;
    this.taskList = this.taskList.filter((ele) => ele._id !== details._id);
  }

  deleteTask(id: string) {
    this.taskService.deleteTask(id).subscribe((data) => this.getTasks());
  }

  onSubmit(formDetails: NgForm) { 
    if (this.isEdit) { 
      this.taskService.editTask(this.taskDetails as ITask).subscribe((data) => {
        this.getTasks();
        this.isEdit = false;
        formDetails.reset();
      });
    } else {
      this.taskService
        .addNewTask(this.taskDetails as IAddTask)
        .subscribe((data) => {
          this.getTasks();
          formDetails.reset();
        });
    }
  }

  onReset(formData: NgForm) {
    this.taskDetails = {
      title: '',
      description: '',
    };
    formData.reset();
  }
}
