import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IAddTask, ITask } from '../interface/task.interface';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  constructor(private http: HttpClient) { }

  baseUrl=`http://localhost:3000/tasks`
  
  getAllTask() { 
    return this.http.get<ITask[]>(this.baseUrl); 
  }

  addNewTask(task: IAddTask) {
    const url=this.baseUrl + '/create'
    return this.http.post<ITask>(url, task);
  }

  editTask(task: ITask) {
    const url = this.baseUrl + `/update/${task._id}`
    return this.http.patch(url, task)
  }

  deleteTask(id: string) {
    const url = this.baseUrl + `/delete/${id}`
    return this.http.delete(url)
  }
}
