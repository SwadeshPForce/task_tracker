import { Component, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { ITask } from '../../interface/task.interface';

@Component({
  selector: 'app-card',
  imports: [],
  templateUrl: './card.component.html', 
})
export class CardComponent {
  @Input() details: any = null;

  @Output() editTaskAction = new EventEmitter<ITask>()
  @Output() deleteTaskAction= new EventEmitter<string>()

  
  editTask(task:ITask) {
    this.editTaskAction.emit(task)
  }

  deleteTask(id: string) {
    this.deleteTaskAction.emit(id)
  }
}
