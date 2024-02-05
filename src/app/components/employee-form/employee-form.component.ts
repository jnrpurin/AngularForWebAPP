import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormsModule, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-employee-form',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule],
  templateUrl: './employee-form.component.html',
  styleUrl: './employee-form.component.css'
})

export class EmployeeFormComponent implements OnInit {

  formEmployee!: FormGroup;

  constructor() {  }

  ngOnInit(): void {
    this.formEmployee = new FormGroup({
      id: new FormControl(0),
      firstName: new FormControl('gbfghf'),
      lastName: new FormControl('dgfdf'),
      shiftBox: new FormControl(''),
      isActive: new FormControl(true),
      createdDate: new FormControl(new Date()),
      changedDate: new FormControl(new Date())
    });
  }

  submit(){
    console.log(this.formEmployee.value)
  }
}
