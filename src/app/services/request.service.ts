import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Request} from '../interfaces/Request.interface';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root',
})
export class RequestService {
  private apiUrl = 'http://localhost:5000/requests';

  constructor(private http: HttpClient) { }

  getRequests(): Observable<Request[]> {
    return this.http.get<Request[]>(this.apiUrl);
  }

  deleteRequest(request: Request): Observable<Request> {
    const url = `${this.apiUrl}/${request.id}`;
    return this.http.delete<Request>(url);
  }

  addRequest(request: Request): Observable<Request> {
    return this.http.post<Request>(this.apiUrl, request , httpOptions)
  }


}
