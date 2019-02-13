import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Employee } from './models/employee-model';
import { catchError, map, mergeMap, tap } from 'rxjs/operators';
import { forkJoin, Observable, of as observableOf, throwError as observableThrowError } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private _getInvoicesWithDetails: Observable<Employee[]> = undefined;
  private invoicesWithDetails: Employee[] = undefined;
  constructor(private _http: HttpClient) { }
  
  // public getAllEmployees(): Employee[] {
  //   let employees: Employee[];
    
  //   this._http.get('http://localhost:8080/api/v1/emplist').flatMap((response) => response.json())
  //       .filter((person) => person.id > 5)
  //       .map((person) => "Dr. " + person.name)
  //       .subscribe((data) => {
  //         employees.push(data);
  //       });
  //       return employees;
  // }

  getAllEmployees(): Observable<Employee[]> {

    return this._getInvoicesWithDetails = this._http.get<Employee[]>('/api/v1/emplist')
      .pipe(
        map((res: Employee[]) => res),
        tap((data) => this.invoicesWithDetails = data),
        catchError(this.handleError)
      );
  }

  private handleError(err: HttpErrorResponse) {
    // in a real world app, we may send the server to some remote logging infrastructure
    // instead of just logging it to the console
    let errorMessage = '';
    if (err.error instanceof Error) {
      // A client-side or network error occurred. Handle it accordingly.
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
    }
    console.error(errorMessage);
    return observableThrowError(errorMessage);
  }
}
