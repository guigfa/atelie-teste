import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const API = 'https://api.teste-frontend.ateliedepropaganda.com.br/v1/register';

@Injectable({
  providedIn: 'root'
})
export class SendFormService {

  constructor(private http: HttpClient) { }

  sendFormData(data: FormData): Observable<HttpResponse<FormData>> {
    return this.http.post<FormData>(API, data, { observe: 'response' });
  }
}
