import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
declare var JitsiMeetJS: any;

@Injectable({
  providedIn: 'root',
})
export class ExtraClassService {
  baseEndPointCourse = environment.baseUrl + 'course';
  baseEndPointStudent = environment.baseUrl + 'student';
  baseEndPointDocument = environment.baseUrl + 'docment';

  constructor(private httpClient: HttpClient) {}

  public handleError(result?: any): any {
    if (result.error instanceof ErrorEvent) {
      console.error('An error occurred:', result.error.message);
    } else {
      console.error(
        `Backend returned code ${result.status}, ` + `body was: ${result.error}`
      );
    }
    return throwError('Something bad happened; please try again later.');
  }

  public getInstitution(): any {
    return this.httpClient.get<any>(this.baseEndPointCourse).pipe(
      catchError((err) => {
        this.handleError([]);
        return throwError(err);
      })
    );
  }

  public getClass(): any {
    return this.httpClient.get<any>(this.baseEndPointStudent).pipe(
      catchError((err) => {
        this.handleError([]);
        return throwError(err);
      })
    );
  }
}
