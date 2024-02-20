import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeFormComponent } from "../../../components/employee-form/employee-form.component";
import { Employee } from '../../../models/Employee';
import { EmployeeService } from '../../../services/employee.service';

@Component({
    selector: 'app-employee-save',
    standalone: true,
    templateUrl: './employee-save.component.html',
    styleUrl: './employee-save.component.css',
    imports: [EmployeeFormComponent]
})
export class EmployeeSaveComponent {

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
