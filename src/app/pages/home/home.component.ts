import { Component, OnInit } from '@angular/core';
import { Employee } from '../../models/Employee';
import { EmployeeService } from '../../services/employee.service';
import { RouterLink, RouterOutlet } from '@angular/router';

//Angular material
import { MatTableModule } from '@angular/material/table'
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { DeleteComponent } from '../../components/delete/delete.component';

@Component({
  selector: 'app-myHome',
  standalone: true,
  imports: [RouterLink, RouterOutlet,
    MatTableModule, MatCardModule, MatInputModule, MatButtonModule, MatSelectModule, MatDialogModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})

export class HomeComponent implements OnInit {

  constructor(private empoyeeService: EmployeeService, private dialog: MatDialog){}

  employeesList: Employee[] = [];
  employeesGeneral: Employee[] = [];

  columns = ['Status', 'Name', 'LastName', 'Shift', 'Actions'];

  ngOnInit(): void {
    this.empoyeeService.GetEmployeeService().subscribe(result => {
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

  openDialogDelete(id: number){
      this.dialog.open(DeleteComponent, {
        width: '250px',
        height: '250px',
        data:{
          id: id
        }
      });
  }
}
