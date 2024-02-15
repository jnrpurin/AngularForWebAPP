import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeFormComponent } from "../../components/employee-form/employee-form.component";
import { Employee } from '../../models/Employee';
import { EmployeeService } from '../../services/employee.service';

@Component({
    selector: 'app-base',
    standalone: true,
    templateUrl: './base.component.html',
    styleUrl: './base.component.css',
    imports: [EmployeeFormComponent]
})
export class BaseComponent {

  btnAction = "Save";
  btnTitle = "Create New Employee!"
  constructor(private employeeService: EmployeeService, private router : Router) {

  }

  CreateEmployee(employee: Employee){
    this.employeeService.CreateEmployeeService(employee).subscribe( () => {
      this.router.navigate(['/']);
    });
  }
}
