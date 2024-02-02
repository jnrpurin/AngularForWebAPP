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

  GetEmployee(): Observable<Response<Employee[]>>{
    return this.http.get<Response<Employee[]>>(this.apiUrl);
  }
}
