import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Employee } from '../../models/Employee';
import { EmployeeService } from '../../services/employee.service';

import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-delete',
  standalone: true,
  imports: [MatDialogModule, MatButtonModule],
  templateUrl: './delete.component.html',
  styleUrl: './delete.component.css'
})

export class DeleteComponent implements OnInit {

  inputData: any;
  employee!: Employee;

  constructor(
    private EmployeeService: EmployeeService,
    private router: Router,
    private ref:MatDialogRef<DeleteComponent>,
    @Inject(MAT_DIALOG_DATA) public data:any
  ){}

    ngOnInit(): void {
      this.inputData = this.data;
      this.EmployeeService.GetEmployeeByIdService(this.inputData.id).subscribe((employeeReturn) => {
        this.employee = employeeReturn.data;
      });
    }

    DeleteEmployee(){
        this.EmployeeService.DeleteEmployeeService(this.inputData.id).subscribe((employeeReturn) => {
          this.employee = employeeReturn.data;
          this.ref.close();
          window.location.reload();
        });
    }

    CloseModal(){
      this.ref.close();
    }
}
