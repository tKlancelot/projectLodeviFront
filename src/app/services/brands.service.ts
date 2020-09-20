import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError, retry} from 'rxjs/internal/operators';
import { Brand } from '../models/brand';

@Injectable({
  providedIn: 'root'
})
export class BrandsService {
  private apiUrl = 'http://localhost:8000/api/brands';
  

  constructor(private httpClient: HttpClient) {
  }

  getAll(): Observable<Brand[]>{
    return this.httpClient.get<Brand[]>(this.apiUrl).pipe(retry(1), catchError(this.handleError));
  }

  add(brand : Brand):Observable<Brand>{
    return this.httpClient.post<Brand>(this.apiUrl, brand).pipe(retry(1),catchError(this.handleError)); 
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