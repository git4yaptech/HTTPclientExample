import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule, enableProdMode } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserListComponent } from './user-list/user-list.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import {FormsModule} from '@angular/forms';
import { MustMatchDirective } from './registration/must-match.directive';
import { PasswordMatchDirective } from './registration/password-match.directive';
enableProdMode()
@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    HomeComponent,
    LoginComponent,
    RegistrationComponent,
    ForgotPasswordComponent,
    MustMatchDirective,
    PasswordMatchDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
