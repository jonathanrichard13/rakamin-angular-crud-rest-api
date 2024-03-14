import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DummyRestAPIResponse } from '../../types';
import { Employee } from './types';
import { BehaviorSubject, Observable, map, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  //@ts-ignore
private employees:BehaviorSubject<Employee[]> = new BehaviorSubject([])
private employees$: Observable<Employee[]>=this.employees.asObservable()
  constructor(private http:HttpClient) { }
  getEmployees(){
    return this.employees$
  }
  fetchEmployees():void{
    this.http.get<DummyRestAPIResponse<any[]>>('https://dummy.restapiexample.com/api/v1/employees')
    .pipe(
      map(
        (data) => data.data.map((employee) => ({
          id: employee.id,
          name: employee.employee_name,
          salary: employee.employee_salary,
          age: employee.employee_age,
          image: employee.employee_image,
        }))
      )
    ).subscribe(data => {
      this.employees.next(data)
    })
  }
  deleteEmployee(id: number){
    this.http.delete(`https://dummy.restapiexample.com/api/v1/delete/${id}`)
    .pipe(tap(() => this.fetchEmployees())).subscribe()
  }
}