import { Routes } from '@angular/router';
import { BaseComponent } from './pages/base/base.component';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
  {path: "base", component: BaseComponent},
  {path: '', component: HomeComponent}
];
