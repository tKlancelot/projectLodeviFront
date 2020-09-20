import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError, retry} from 'rxjs/internal/operators';
import { CarModel } from '../models/car-model';
import { Garage } from '../models/garage';


@Injectable({
  providedIn: 'root'
})
export class GaragesService {
  private apiUrl = 'http://localhost:8000/api/garages';

  constructor(private httpClient: HttpClient) {
  }

  getAll(): Observable<Garage[]>{
    return this.httpClient.get<Garage[]>(this.apiUrl).pipe(retry(1), catchError(this.handleError));
  }

  add(garage : Garage):Observable<Garage>{
    return this.httpClient.post<Garage>(this.apiUrl, garage).pipe(retry(1),catchError(this.handleError)); 
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
