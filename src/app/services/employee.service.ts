import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { environment } from '../../environments/environment.development';
import { Employee } from '../models/Employee';
import { Response } from '../models/Response';

//for local tests
import { FAKE_RESPONSE } from './fakeresponse';
import { FAKE_RESPONSE_ARRAY } from './fakeresponse';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private apiUrl = `${environment.ApiUrl}/Employee`
  constructor( private http: HttpClient) { }

  GetEmployeeService(): Observable<Response<Employee[]>>{
    //return this.http.get<Response<Employee[]>>(this.apiUrl);
    return of (FAKE_RESPONSE_ARRAY);
  }

  CreateEmployeeService(employee : Employee) : Observable<Response<Employee[]>>{
    return this.http.post<Response<Employee[]>>(`${this.apiUrl}`, employee);
  }

  GetEmployeeByIdService(id: number): Observable<Response<Employee>>{
    //return this.http.get<Response<Employee>>(`${this.apiUrl}/${id}`);
    return of (FAKE_RESPONSE);
  }

  EditEmployeeService(employee: Employee) : Observable<Response<Employee>> {
    //return this.http.put<Response<Employee>>(`${this.apiUrl}`, employee);
    return of (FAKE_RESPONSE);
  }

  InativateEmployeeService(id: number) : Observable<Response<Employee>> {
    return this.http.put<Response<Employee>>(`${this.apiUrl}/disableEmployee?id=${id}`, id);
  }

  DeleteEmployeeService(id: number) : Observable<Response<Employee>> {
    return this.http.delete<Response<Employee>>(`${this.apiUrl}/${id}`);
  }
}
