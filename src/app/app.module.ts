import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { NewsComponent } from './news/news.component';
import { rootRouterConfig } from './app.router';
import { AlertModule } from 'ng2-bootstrap/ng2-bootstrap';
import {PopupModule} from 'ng2-opd-popup';
import { BootstrapModalModule } from 'ng2-bootstrap-modal';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NewsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(rootRouterConfig, { useHash: true }),
    AlertModule.forRoot(),
    PopupModule.forRoot(),
    BootstrapModalModule.forRoot({container:document.body})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
