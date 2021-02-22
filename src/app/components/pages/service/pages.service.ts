import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class PagesService {
  baseEndPointCourse = environment.baseUrl + 'course';
  baseEndPointDocument = environment.baseUrl + 'docment';
  sendEmailEndPoint = environment.baseUrl + 'sendEmail';

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

  public create(data: any): Observable<any> {
    return this.httpClient.post<any>(`${this.baseEndPointCourse}`, data).pipe(
      catchError((err) => {
        this.handleError([]);
        return throwError(err);
      })
    );
  }

  public sendEmail(data: any): Observable<any> {
    return this.httpClient.post<any>(`${this.baseEndPointCourse}`, data).pipe(
      catchError((err) => {
        this.handleError([]);
        return throwError(err);
      })
    );
  }

  public update(id: string, data: any): Observable<any> {
    return this.httpClient
      .put<any>(`${this.baseEndPointCourse}${id}/`, data)
      .pipe(
        catchError((err) => {
          this.handleError([]);
          return throwError(err);
        })
      );
  }

  public getById(id: string): Observable<any> {
    return this.httpClient.get(`${this.baseEndPointCourse}/${id}/`).pipe(
      catchError((err) => {
        this.handleError([]);
        return throwError(err);
      })
    );
  }

  public getCourseList(): any {
    return this.httpClient.get(`${this.baseEndPointCourse}`).pipe(
      catchError((err) => {
        this.handleError([]);
        return throwError(err);
      })
    );
  }

  public getDocumentList(): any {
    return this.httpClient.get(`${this.baseEndPointDocument}`).pipe(
      catchError((err) => {
        this.handleError([]);
        return throwError(err);
      })
    );
  }

  public getCourseListQueryOptions(queryOptions?: any): any {
    return this.httpClient.get(`${this.baseEndPointCourse}`).pipe(
      catchError((err) => {
        this.handleError([]);
        return throwError(err);
      })
    );
  }
}
