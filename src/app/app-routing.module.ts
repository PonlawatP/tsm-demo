import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './account/login/login.component';
import { RegisterComponent } from './account/register/register.component';
import { AppComponent } from './app.component';
import { MembersComponent } from './home/members/members.component';
import { AuthGuard } from './middle/auth.guard';

const routes: Routes = [
  { path: '', component: AppComponent, canActivate: [AuthGuard] },
  {
    path: 'account', component: LoginComponent,
    children: [
      {
        path: 'login', component: LoginComponent,
      }, {
        path: 'register', component: RegisterComponent
      },
    ]
  },
  { path: 'members', component: MembersComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
