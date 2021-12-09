import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Material } from '../Material';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}


@Injectable({
  providedIn: 'root',
})
export class MaterialService {
  private apiUrl = 'http://localhost:5000/materials';

  constructor(private http: HttpClient) {}

  getMaterials(): Observable<Material[]> {
   return this.http.get<Material[]>(this.apiUrl);
  }

  deleteMaterial(material: Material): Observable<Material> {
    const url = `${this.apiUrl}/${material.id}`;
    return this.http.delete<Material>(url);
  }

  addMaterial(material: Material): Observable<Material> {
    return this.http.post<Material>(this.apiUrl, material, httpOptions)
  }
  updateMaterial(material:Material,newMaterial: Material): Observable<Material> {
    const url= `${this.apiUrl}/${material.id}`
    return this.http.patch<Material>(url,{
      quantity: material.quantity - newMaterial.quantity
    },
       httpOptions)
  }
}
