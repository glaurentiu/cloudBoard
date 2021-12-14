import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Raport } from '../interfaces/Raport.interface';
import { addDoc, collection, collectionData, doc, DocumentData, Firestore, updateDoc } from '@angular/fire/firestore';

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
  constructor(private http: HttpClient, private firestore: Firestore) {}

  getRaports(): Observable<DocumentData[]> {
    const raportsRef =collection(this.firestore, 'raports');
    return collectionData(raportsRef, { idField: "id"})
  }

  addRaport(raport: Raport){
   const raportRef = collection(this.firestore,'raports');
   return addDoc(raportRef,raport)
  }

  updateRaport(raport:Raport){
  const raportDocRef = doc(this.firestore, `raports/${raport.id}`);
  setTimeout(this.reloadPage,1000)
  return updateDoc(raportDocRef, {bill: true})

  }
  reloadPage() {
    window.location.reload();
 }
}
