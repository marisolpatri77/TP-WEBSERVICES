import { HttpClient, HttpHandler, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IPinfoService {

  constructor(private _http: HttpClient) {

  }

  postInformacionIp(ip: string): Observable<any> {
    let httpOption = {
      headers: new HttpHeaders({
        'content-type': 'application/json',
        'X-RapidAPI-Key': '8bbd9a901amsh7f1db22ab4ae508p17671bjsn7b0da48ce9dc',
        'X-RapidAPI-Host': 'community-neutrino-ip-info.p.rapidapi.com'
      })
    }

    let body = { ip, 'reverse-lookup': 'checked' }

    return this._http.post('https://community-neutrino-ip-info.p.rapidapi.com/ip-info', body, httpOption);
  }




}
