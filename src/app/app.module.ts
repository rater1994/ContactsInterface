import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
// import { AuthInterceptor } from './auth.interceptor';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactsService } from './services/contacts.service';
import { ListcontactsComponent } from './contacts/listcontacts/listcontacts.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { LoginComponent } from './accounts/login/login.component';
import { AuthenticationService } from './services/authentication.service';
import { AuthGuard } from './services/auth.guard';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    ListcontactsComponent,
    LoginComponent,
    HomeComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HttpModule,
    FormsModule,


  ],
  providers: [
    // ContactsService, {
  //       provide:HTTP_INTERCEPTORS,
  //       // useClass:AuthInterceptor,
  //       multi:true
  // },
  AuthenticationService,
  AuthGuard
],
  bootstrap: [AppComponent]
})
export class AppModule { }
