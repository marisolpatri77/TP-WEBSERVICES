import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NoticiaService {

  constructor(private _http: HttpClient) { 

  }

  getNoticias(): Observable<any>{
    let httpOption = {
      headers: new HttpHeaders({
        'X-RapidAPI-Key': '8bbd9a901amsh7f1db22ab4ae508p17671bjsn7b0da48ce9dc',
        'X-RapidAPI-Host': 'livescore6.p.rapidapi.com'
      })   
    }

    return this._http.get('https://livescore6.p.rapidapi.com/news/v2/list', httpOption);
  }


  getNoticiaById(id: string): Observable<any>{
    let httpOption = {
      headers: new HttpHeaders({
        'X-RapidAPI-Key': '8bbd9a901amsh7f1db22ab4ae508p17671bjsn7b0da48ce9dc',
        'X-RapidAPI-Host': 'livescore6.p.rapidapi.com'
      }),
      
      params: new HttpParams()
                  .append('id', id)
    }

    

    return this._http.get('https://livescore6.p.rapidapi.com/news/v2/detail', httpOption);
  }
}
