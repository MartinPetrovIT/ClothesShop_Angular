import { Input, Component, Output, EventEmitter, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})

export class LoginFormComponent implements OnInit {

  form = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(3)]],
  });
  constructor(
 
    private httpClient :HttpClient,
    private formBuilder: FormBuilder,
    private router: Router
  )
  {

  }
  ngOnInit(): void {
    console.log('vafsafasfa')
  }

  submit() {
    if (this.form.valid) {
      const { email,  password } = this.form.value;
      let userdata = {'email' : email, 'password' : password}

      this.httpClient.post('http://desktop-fp8mbl2:5291/api/login', userdata ).subscribe((res) =>
    console.log(res)
    )
    }

  }

// @Input() error: string | null;

  @Output() submitEM = new EventEmitter();
}
