import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],

})
export class LoginComponent implements OnInit {

  form: FormGroup
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.form = this.fb.group(
      {
        // 所有表单项都要初始化
        email: ['dongnan@163.com',
          Validators.compose([Validators.required, Validators.email, this.validate])],
        pwd: ['', Validators.required],
      }
    )
  }

  onSubmit({ value, valid }, ev: Event) {
    ev.preventDefault()
  }

  validate(c: FormControl): { [key: string]: any } {
    if (!c.value) {
      return null
    }
    const pattern = /^dong+/;
    if (pattern.test(c.value)) {
      return null;
    } else {
      return { emailNotValid: 'Email must start with dong' }
    }
  }

}
