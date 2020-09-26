import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/internal/operators';
import { Advert } from '../models/advert';
import { Brand } from '../models/brand';
import { CarModel } from '../models/car-model';


@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private http : HttpClient ) { }

  private apiUrl = 'http://localhost:8000/api/brands';
  private apiUrl2 = 'http://localhost:8000/api/car_models';


  getBrand(): Observable<Brand[]>{
      return this.http.get<Brand[]>(this.apiUrl).pipe(retry(1), catchError(this.handleError));
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
