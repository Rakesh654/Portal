import { Routes } from '@angular/router';
import { UserComponent } from './user/user.component';
import { MsalGuard } from '@azure/msal-angular';
import { FailedComponent } from './failed/failed.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
  {
    path: 'user',
    component: UserComponent,
    canActivate: [MsalGuard],
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'login-failed',
    component: FailedComponent,
  },
];
