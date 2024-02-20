import { Routes } from '@angular/router';
import { EmployeeDetailsComponent } from './pages/employee/details/employee-details.component';
import { EmployeeEditComponent } from './pages/employee/edit/employee-edit.component';
import { EmployeeSaveComponent } from './pages/employee/save/employee-save.component';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
  {path: 'save', component: EmployeeSaveComponent},
  {path: '', component: HomeComponent},
  {path: 'edit/:id', component: EmployeeEditComponent},
  {path: 'details/:id', component: EmployeeDetailsComponent},
];
