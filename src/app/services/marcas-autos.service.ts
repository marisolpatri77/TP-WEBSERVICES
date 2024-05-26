import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MarcasAutosService {

  constructor(private _http: HttpClient) {

  }

  getMakes(): Observable<any> {

    let httpOption = {
      headers: new HttpHeaders({
        'X-RapidAPI-Key': '0e8a860fe2mshfb9683919485910p12f7b5jsn571f18adcc1a',
        'X-RapidAPI-Host': 'car-specs.p.rapidapi.com'
      }),
    }

    return this._http.get('https://car-specs.p.rapidapi.com/v2/cars/makes', httpOption);
  }

  getModelsByMarkId(id: string): Observable<any> {

    const url = `https://car-specs.p.rapidapi.com/v2/cars/makes/${id}/models`;
    let httpOption = {
      headers: new HttpHeaders({
        'X-RapidAPI-Key': '0e8a860fe2mshfb9683919485910p12f7b5jsn571f18adcc1a',
        'X-RapidAPI-Host': 'car-specs.p.rapidapi.com'
      }),

      /*params: new HttpParams()
        .append('id', id)*/

    }

    return this._http.get(url, httpOption);
  }
}
