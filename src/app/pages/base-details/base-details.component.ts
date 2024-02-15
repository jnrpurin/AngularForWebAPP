import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from '../../models/Employee';
import { EmployeeService } from '../../services/employee.service';

@Component({
  selector: 'app-base-details',
  standalone: true,
  imports: [],
  templateUrl: './base-details.component.html',
  styleUrl: './base-details.component.css'
})
export class BaseDetailsComponent  implements OnInit {

  employee?: Employee;

  constructor(private employeeService: EmployeeService, private route: ActivatedRoute, private router : Router) {

  }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.employeeService.GetEmployeeByIdService(id).subscribe((employee) => {
      this.employee = employee.data;
    });
  }

  goToHome(){
    this.router.navigate(['/']);
  }
}
