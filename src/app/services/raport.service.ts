import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Raport } from '../interfaces/Raport.interface';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};
@Injectable({
  providedIn: 'root',
})
export class RaportService {
  private apiUrl = 'http://localhost:5000/raports';
  constructor(private http: HttpClient) {}

  getRaports(): Observable<Raport[]> {
    return this.http.get<Raport[]>(this.apiUrl);
  }

  addRaport(raport: Raport): Observable<Raport> {
    return this.http.post<Raport>(this.apiUrl, raport, httpOptions);
  }

  updateRaport(raport:Raport): Observable<Raport> {
    const url=`${this.apiUrl}/${raport.id}`
    this.reloadPage();
    return this.http.patch<Raport>(url, {bill: true}, httpOptions)
  }
  reloadPage() {
    window.location.reload();
 }
}
