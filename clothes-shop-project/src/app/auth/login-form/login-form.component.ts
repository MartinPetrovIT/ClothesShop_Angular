import { Input, Component, Output, EventEmitter, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

import { AuthService } from '../auth.service';
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

    private formBuilder: FormBuilder,
    private authService: AuthService,
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
      this.authService.login(email!, password!).subscribe({
        next: (user) => {
          this.authService.user = user
          this.router.navigate(['/']);
        },
        error: (err) => {
          console.error('Error from login', err.message);
        }
      });
    }

  }

// @Input() error: string | null;

  @Output() submitEM = new EventEmitter();
}
