import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppService } from './app.service';
import { RouterModule } from '@angular/router';
import { APP_ROUTES } from './app.routes';
import { UpdatePessoaComponent } from './update-pessoa/update-pessoa.component';
import { PessoaComponent } from './pessoa/pessoa.component';
import { LoginComponent } from './login/login.component';
import { BasicAuthInterceptorService } from './basic-auth-interceptor.service';

@NgModule({
  declarations: [
    AppComponent,
    UpdatePessoaComponent,
    PessoaComponent,
    LoginComponent,
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    //ReactiveFormsModule,
    RouterModule.forRoot(APP_ROUTES)
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: BasicAuthInterceptorService,
    multi: true
  },AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
