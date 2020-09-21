import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Advert } from '../models/advert';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/internal/operators';

@Injectable({
  providedIn: 'root'
})
export class AdvertsService {

  private apiUrl = 'http://localhost:8000/api/adverts';

  constructor(private httpClient : HttpClient) { }

  getAll(): Observable<Advert[]>{
    return this.httpClient.get<Advert[]>(this.apiUrl).pipe(retry(1), catchError(this.handleError));
  }

  getOneAdvert(id: number): Observable<Advert> {
    return this.httpClient.get<Advert>(this.apiUrl + '/' + id).pipe(retry(1),
      catchError(this.handleError)
    );
  }


  add(advert : Advert):Observable<Advert>{
    return this.httpClient.post<Advert>(this.apiUrl, advert).pipe(retry(1),catchError(this.handleError)); 
  }


  deleteAdvert(id: number): Observable<Advert> {
    return this.httpClient.delete<Advert>(this.apiUrl + '/' + id).pipe(retry(1),
      catchError(this.handleError)
    );
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
