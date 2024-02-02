import { Component, OnInit } from '@angular/core';
import { Employee } from '../../models/Employee';
import { EmployeeService } from '../../services/employee.service';

@Component({
  selector: 'app-myHome',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})

export class HomeComponent implements OnInit {
  constructor(private empoyeeService: EmployeeService){}
  employeesList: Employee[] = [];
  employeesGeneral: Employee[] = [];

  ngOnInit(): void {
    this.empoyeeService.GetEmployee().subscribe(result => {
      const dataApi = result.data;
      dataApi.map((item) => {
        item.createdDate = new Date(item.createdDate!).toLocaleDateString('en-US');
        item.changedDate = new Date(item.changedDate!).toLocaleDateString('en-US');
      });
      this.employeesList = dataApi;
      this.employeesGeneral = dataApi;
    });
  }

  searchEmployee(event:Event){
    const target = event.target as HTMLInputElement;
    const value = target.value.toLocaleLowerCase();

    this.employeesList = this.employeesGeneral.filter(emp => {
      return emp.firstName.toLocaleLowerCase().includes(value) || emp.lastName.toLocaleLowerCase().includes(value);
    })
  }
}
