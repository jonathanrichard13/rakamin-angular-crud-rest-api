import { Routes } from '@angular/router';
import { LoginPageComponent } from './login-page/login-page.component';
import { CanActivateAuth } from './auth.guard';

export const routes: Routes = [
  { path: '', redirectTo: 'employee', pathMatch: 'full'},
  { path: 'login', component:LoginPageComponent},
  { path: 'employee', canActivate:[CanActivateAuth], loadChildren: () => import('./employee/employee.module').then(m => m.EmployeeModule) },
];
