import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from '../../../models/Employee';
import { EmployeeService } from '../../../services/employee.service';

//angular material
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-employee-details',
  standalone: true,
  imports: [MatButtonModule, MatCardModule, MatInputModule, MatSelectModule],
  templateUrl: './employee-details.component.html',
  styleUrl: './employee-details.component.css'
})
export class EmployeeDetailsComponent  implements OnInit {

  employee?: Employee;
  id!: number;
  constructor(private employeeService: EmployeeService, private route: ActivatedRoute, private router : Router) {

  }

  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    this.employeeService.GetEmployeeByIdService(this.id).subscribe((employee) => {
      this.employee = employee.data;
    });
  }

  inactiveEmployee(){
    this.employeeService.InativateEmployeeService(this.id).subscribe((employee) => {
      //this.employee = employee.data;
      this.goToHome();
    });
  }

  goToHome(){
    this.router.navigate(['/']);
  }
}
