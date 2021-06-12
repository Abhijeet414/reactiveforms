import { Component } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  msg: string = "";
  myform: FormGroup;
  constructor() {
    this.myform = new FormGroup({
      firstname: new FormControl("Wills", [Validators.required, Validators.minLength(3), Validators.maxLength(20), Validators.pattern("^[a-zA-Z ]*$")]),
      lastname: new FormControl("", [Validators.required, Validators.minLength(5), Validators
        .maxLength(20), Validators.pattern("^[a-zA-Z ]*$")]),

      email: new FormControl("", [Validators.required, Validators.pattern("^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$")]),

      phone: new FormControl("", [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]),
      password: new FormControl("", [Validators.required,Validators.minLength(6),Validators.maxLength(6)]),
      repassword: new FormControl("", [Validators.required,Validators.minLength(6),Validators.maxLength(6)]),

  }
  );
}
onRegisterClick() {
  if (this.myform.valid) {
    this.msg = "First Name: " + this.myform.controls.firstname.value +
      "<br>Last Name: " + this.myform.controls.lastname.value +
      "<br>Email: " + this.myform.controls.email.value +
      "<br>Phone: " + this.myform.controls.phone.value +
      "<br>Password: " + this.myform.controls.password.value +
      "<br>Repassword: " + this.myform.controls.repassword.value;
  }
  else {
    this.msg = "Invalid";
  }
}
}
