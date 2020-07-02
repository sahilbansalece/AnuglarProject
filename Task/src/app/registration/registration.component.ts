import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  registrationForm : FormGroup;
  constructor( private fb : FormBuilder) { }

  ngOnInit(): void {
    this.createRegistrationForm();
  
  }

  createRegistrationForm()
  {
    this.registrationForm = this.fb.group({
      name: [null,[ Validators.required, Validators.minLength(3)]],
      email: [null,[ Validators.required, Validators.email]],
      password: [null, [Validators.required, Validators.minLength(8)]],
      confirmPassword: [null, Validators.required],
      phone: [null, [Validators.required, Validators.maxLength(10), Validators.minLength(10)]]
    },{validators: this.passwordMatchingValidators});
  }
 
  passwordMatchingValidators(fg: FormGroup): Validators{
    return fg.get('password').value === fg.get('confirmPassword').value ? null :
    {notMatched : true};
  }


  onSubmit()
  {
    console.log(this.registrationForm);
  }
}
