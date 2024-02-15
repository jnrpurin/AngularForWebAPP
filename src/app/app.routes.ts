import { Routes } from '@angular/router';
import { BaseEditComponent } from './pages/base-edit/base-edit.component';
import { BaseComponent } from './pages/base/base.component';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
  {path: "base", component: BaseComponent},
  {path: '', component: HomeComponent},
  {path: 'edit/:id', component: BaseEditComponent},
];
