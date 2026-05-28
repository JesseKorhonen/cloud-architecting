import { Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { AuthGuard } from './auth.guard';
import { ListComponent } from './list/list.component';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
  { path: '', component: ListComponent },
  { path: 'login', component: LoginComponent },
  { path: 'admin', component: AdminComponent, canActivate: [AuthGuard] },
];
