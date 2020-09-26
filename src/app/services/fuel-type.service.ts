import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError, retry} from 'rxjs/internal/operators';
import { FuelType } from '../models/fuel-type';


@Injectable({
  providedIn: 'root'
})
export class FuelTypeService {

  private apiUrl = 'http://localhost:8000/api/fuel_types';

  constructor(private httpClient: HttpClient) {
  }

  add(fuelType : FuelType):Observable<FuelType>{
    return this.httpClient.post<FuelType>(this.apiUrl, FuelType).pipe(retry(1),catchError(this.handleError)); 
  }

  getAll(): Observable<FuelType[]>{
    return this.httpClient.get<FuelType[]>(this.apiUrl).pipe(retry(1), catchError(this.handleError));
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
