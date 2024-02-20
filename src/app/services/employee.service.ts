import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.development';
import { Employee } from '../models/Employee';
import { Response } from '../models/Response';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private apiUrl = `${environment.ApiUrl}/Employee`
  constructor( private http: HttpClient) { }

  GetEmployeeService(): Observable<Response<Employee[]>>{
    return this.http.get<Response<Employee[]>>(this.apiUrl);
  }

  CreateEmployeeService(employee : Employee) : Observable<Response<Employee[]>>{
    return this.http.post<Response<Employee[]>>(`${this.apiUrl}`, employee);
  }

  GetEmployeeByIdService(id: number): Observable<Response<Employee>>{
    return this.http.get<Response<Employee>>(`${this.apiUrl}/${id}`);
  }

  EditEmployeeService(employee: Employee) : Observable<Response<Employee>> {
    return this.http.put<Response<Employee>>(`${this.apiUrl}`, employee);
  }

  InativateEmployeeService(id: number) : Observable<Response<Employee>> {
    return this.http.put<Response<Employee>>(`${this.apiUrl}/disableEmployee?id=${id}`, id);
  }
}
