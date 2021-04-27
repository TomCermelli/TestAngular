import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from '../app/templates/header/header.component';
import { BodyListComponent } from '../app/templates/body-list/body-list.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app.routing.module';
import { UsersAddComponent } from '../app/templates/users-add/users-add.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { UserEditComponent } from '../app/templates/user-edit/user-edit.component';
import { UserDeleteModalComponent } from '../app/templates/user-delete-modal/user-delete-modal.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from '../app/templates/login/login.component';
import { EmailInterceptor } from './interceptor/http.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyListComponent,
    UsersAddComponent,
    UserEditComponent,
    UserDeleteModalComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
    NgbModule

  ],
  providers: [
    {
    provide: HTTP_INTERCEPTORS,
    useClass: EmailInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
