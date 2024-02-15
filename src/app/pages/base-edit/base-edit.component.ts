import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeFormComponent } from '../../components/employee-form/employee-form.component';
import { Employee } from '../../models/Employee';
import { EmployeeService } from '../../services/employee.service';

@Component({
  selector: 'app-base-edit',
  standalone: true,
  imports: [EmployeeFormComponent],
  templateUrl: './base-edit.component.html',
  styleUrl: './base-edit.component.css'
})

export class BaseEditComponent implements OnInit {

  btnAction:string = "Edit";
  btnTitle:string = "Change Employee!"
  employee!: Employee;

  constructor(private employeeService: EmployeeService, private route : ActivatedRoute, private router : Router) {

  }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.employeeService.GetEmployeeByIdService(id).subscribe((getEmployee)=>{
      this.employee = getEmployee.data;
    });
  }

  EditEmployee(employee: Employee){
    this.employeeService.EditEmployeeService(employee).subscribe( () => {
      this.router.navigate(['/']);
    });
  }
}
