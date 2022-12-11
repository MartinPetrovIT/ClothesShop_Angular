  import { RouterModule, Routes } from '@angular/router';
  import { LoginFormComponent } from './login-form/login-form.component';
  import { RegisterFormComponent } from './register-form/register-form.component';


  export const routes: Routes = [
    {
      path: 'auth/login',
      component: LoginFormComponent,
      title: 'Login Page',
      data: {
        loginRequired: false,
      },
    },
    {
      path: 'auth/register',
      component: RegisterFormComponent,
      title: 'Register Page',
    },
      
  ];

  export const AuthRouterModule = RouterModule.forChild(routes);
