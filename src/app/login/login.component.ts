import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

constructor(private router:Router){}

check: boolean=false;

submitForm(myForm: NgForm) {
  if (myForm.valid && this.check) {
    this.router.navigate(['home']);
    // return;

  }

  // console.log(`Checkbox checked: ${this.check}`);
  // // perform form submission logic here
}


}
