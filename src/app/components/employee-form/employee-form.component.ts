import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ReactiveFormsModule, FormsModule, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Employee } from '../../models/Employee';

@Component({
  selector: 'app-employee-form',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule],
  templateUrl: './employee-form.component.html',
  styleUrl: './employee-form.component.css'
})

export class EmployeeFormComponent implements OnInit {
  @Output() onSubmit = new EventEmitter<Employee>();
  @Input() btnAction!: string;
  @Input() btnTitle!: string;
  @Input() employeeData: Employee | null = null;

  formEmployee!: FormGroup;

  constructor(private router : Router) {  }

  ngOnInit(): void {
    this.formEmployee = new FormGroup({
      id: new FormControl(this.employeeData ? this.employeeData.id : 0),
      firstName: new FormControl(this.employeeData ? this.employeeData.firstName : '', [Validators.required]),
      lastName: new FormControl(this.employeeData ? this.employeeData.lastName : '', [Validators.required]),
      shift: new FormControl(this.employeeData ? this.employeeData.shift : 'Morning'),
      isActive: new FormControl(this.employeeData ? this.employeeData.isActive : true),
      createdDate: new FormControl(this.employeeData ? this.employeeData.createdDate : new Date()),
      changedDate: new FormControl(new Date())
    });
  }

  submit(){
    this.onSubmit.emit(this.formEmployee.value);
  }

  goToHome(){
    this.router.navigate(['/']);
  }
}
