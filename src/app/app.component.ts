import { Component, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.less'
})
export class AppComponent {
  title = 'Banana API Access Request Form';
  isOK = false;

  okMessage = "Thank you for reaching out, we will revert to your request in 1-2 business working days.";
  
  nokMessage = "Must complete all the fields"

  @ViewChild('apiReqForm')
  apiReqForm: any = {}

  newRequest:any = {}

  processForm() {
    console.log('processForm..', this.apiReqForm.valid);
    console.log('processForm..', this.newRequest);
    if(this.apiReqForm.valid){
      this.isOK = true;
    }

  }

}
