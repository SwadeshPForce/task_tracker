import { NgIf } from '@angular/common';
import { Component } from '@angular/core'; 
import {FormsModule, NgForm} from "@angular/forms"
import { CardComponent } from "./components/card/card.component";

@Component({
  selector: 'app-root',
  imports: [
    FormsModule,
    NgIf,
    CardComponent
],
  templateUrl: './app.component.html', 
})
export class AppComponent {
  taskDetails = {};
  taskList=[]
  
  onSubmit(formDetails:NgForm) {
    console.log(formDetails)
    this.taskDetails = formDetails;
  }

  onReset() {
     this.taskDetails={}
  }
}
