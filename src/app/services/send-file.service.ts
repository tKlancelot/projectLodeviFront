import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Advert } from '../models/advert';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/internal/operators';
import { HttpErrorResponse, HttpHeaders } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})

export class SendFileService {

  headers = new Headers();

  constructor(private httpClient : HttpClient) { }


  // envoiFichier(fichierAEnvoyer: File): Observable<boolean> {
  //   const url = 'http://localhost:8000/api/adverts';
  //   const formData: FormData = new FormData();
  //   formData.append('fichier', fichierAEnvoyer, fichierAEnvoyer.name);
  //   return this.httpClient.post(url, formData, { headers : this.headers }).catchError(this.handleError)); 
  // }

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
