import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserListComponent } from 'src/app/user-list/user-list.component';
import { HomeComponent } from 'src/app/home/home.component';
import { LoginComponent } from 'src/app/login/login.component';
import { RegistrationComponent } from 'src/app/registration/registration.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'userList', component: UserListComponent },
  { path: 'login', component: LoginComponent },
  { path: 'regi', component: RegistrationComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
