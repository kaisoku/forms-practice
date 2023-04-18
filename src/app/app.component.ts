import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  @ViewChild('f') formData: NgForm;
  defaultLevel = 'Advanced';
  formSubmitted = false;
  user = {
    email: '',
    level: this.defaultLevel,
    password: '',
  };
  onSubmit() {
    console.log(this.formData.value);
    this.formSubmitted = true;
    this.user.email = this.formData.value.userData.email;
    this.user.level = this.formData.value.userData.level;
    this.user.password = this.formData.value.userData.password;
  }
}
