import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../employee.service';
import { Observable } from 'rxjs';
import { Employee } from '../../types';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-employeetable',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './employeetable.component.html',
  styleUrl: './employeetable.component.css'
})

export class EmployeetableComponent implements OnInit {
  employees: Employee[] = []

  constructor(private employeeService: EmployeeService){}

  ngOnInit(): void {
    this.employeeService.fetchEmployees()
    this.employeeService.getEmployees().subscribe((employees) => {
      this.employees = employees
    })
  }
  hapus(id : number){
    this.employeeService.deleteEmployee(id)
  }
}
