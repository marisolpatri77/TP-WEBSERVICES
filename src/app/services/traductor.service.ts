import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TraductorService {

  constructor(private _http: HttpClient) {
  }

  getLenguages(): Observable<any> {
    let httpOption = {
      headers: new HttpHeaders({
        'X-RapidAPI-Key': '8bbd9a901amsh7f1db22ab4ae508p17671bjsn7b0da48ce9dc',
        'X-RapidAPI-Host': 'google-translate1.p.rapidapi.com'
      }),
    }
    return this._http.get('https://google-translate1.p.rapidapi.com/language/translate/v2/languages', httpOption)
  }


  tranlateText(source: string, target: string, text: string): Observable<any> {
    let httpOption = {
      headers: new HttpHeaders({
        'content-type': 'application/x-www-form-urlencoded',
        'X-RapidAPI-Key': '8bbd9a901amsh7f1db22ab4ae508p17671bjsn7b0da48ce9dc',
        'X-RapidAPI-Host': 'google-translate1.p.rapidapi.com'
      }),
    }

    const body = new HttpParams()
      .set('q', text)
      .set('target', target)
      .set('source', source);


    return this._http.post('https://google-translate1.p.rapidapi.com/language/translate/v2', body, httpOption);
  }

}














