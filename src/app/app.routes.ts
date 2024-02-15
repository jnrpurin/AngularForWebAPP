import { Routes } from '@angular/router';
import { BaseDetailsComponent } from './pages/base-details/base-details.component';
import { BaseEditComponent } from './pages/base-edit/base-edit.component';
import { BaseComponent } from './pages/base/base.component';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
  {path: "base", component: BaseComponent},
  {path: '', component: HomeComponent},
  {path: 'edit/:id', component: BaseEditComponent},
  {path: 'details/:id', component: BaseDetailsComponent},
];
