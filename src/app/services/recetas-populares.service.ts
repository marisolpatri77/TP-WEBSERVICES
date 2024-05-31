import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecetasPopularesService {

  constructor(private _http: HttpClient) { }

  getRecetasPopulares(): Observable<any> {
    let httpOptions = {
      headers: new HttpHeaders({
        'x-rapidapi-key': '8bbd9a901amsh7f1db22ab4ae508p17671bjsn7b0da48ce9dc',
        'x-rapidapi-host': 'recipe-book2.p.rapidapi.com'
      })
    }
    return this._http.get('https://recipe-book2.p.rapidapi.com/recipes-popular', httpOptions);
  }

  getDetailReceta(path: string): Observable<any> {
    let httpOptions = {
      headers: new HttpHeaders({
        'X-RapidAPI-Key': '8bbd9a901amsh7f1db22ab4ae508p17671bjsn7b0da48ce9dc',
        'X-RapidAPI-Host': 'recipe-book2.p.rapidapi.com'
      }),
    
      params : new HttpParams()
      .append('path', path)
    }

    return this._http.get('https://recipe-book2.p.rapidapi.com/recipe-details?', httpOptions)
  }


}
