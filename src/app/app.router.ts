import { Routes } from '@angular/router';

import { NewsComponent } from './news/news.component';
import { LoginComponent } from './login/login.component';
export const rootRouterConfig: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'news', component: NewsComponent },


];

