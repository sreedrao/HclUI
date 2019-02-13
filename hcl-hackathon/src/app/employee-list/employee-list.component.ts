import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Employee } from '../models/employee-model';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  
  employeeList: Array<any>;
  
  constructor(private employeeService: EmployeeService) { 

  }
  
  ngOnInit() {
    this.employeeService.getAllEmployees().subscribe(
      (data) => {
        this.employeeList = data;
        this.employeeList.forEach((item: Employee) => {
        
          console.log(item.employeeId+ '' +item.empName);
        });
      },
      (error) => {console.log('error thrown');}
    )
  }

}
