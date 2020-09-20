import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError, retry} from 'rxjs/internal/operators';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private apiUrl = 'http://localhost:8000/api/users';
  

  constructor(private httpClient: HttpClient) {
  }

  getAll(): Observable<User[]>{
    return this.httpClient.get<User[]>(this.apiUrl).pipe(retry(1), catchError(this.handleError));
  }

  getOne(id: number): Observable<User> {
    return this.httpClient.get<User>(this.apiUrl + '/' + id).pipe(retry(1), catchError(this.handleError));
  }



  handleError(error) {
    let errorMessage = '';
    if ( error.error instanceof ErrorEvent ) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
  }
}
