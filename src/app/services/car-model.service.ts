import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError, retry} from 'rxjs/internal/operators';
import { CarModel } from '../models/car-model';


@Injectable({
  providedIn: 'root'
})
export class CarModelService {
  private apiUrl = 'http://localhost:8000/api/car_models';

  constructor(private httpClient: HttpClient) {
  }

  add(carModel : CarModel):Observable<CarModel>{
    return this.httpClient.post<CarModel>(this.apiUrl, carModel).pipe(retry(1),catchError(this.handleError)); 
  }

  getAll(): Observable<CarModel[]>{
    return this.httpClient.get<CarModel[]>(this.apiUrl).pipe(retry(1), catchError(this.handleError));
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
