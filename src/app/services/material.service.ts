import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, of } from "rxjs";
import { Material } from "../interfaces/Material.interface";

import {
  collection,
  collectionData,
  Firestore,
  DocumentData,
  docData,
  doc,
  addDoc,
  deleteDoc,
  updateDoc,
} from "@angular/fire/firestore";

const httpOptions = {
  headers: new HttpHeaders({
    "Content-Type": "application/json",
  }),
};

@Injectable({
  providedIn: "root",
})
export class MaterialService {
  private apiUrl = "http://localhost:5000/materials";

  constructor(private http: HttpClient, private firestore: Firestore) {}

  getMaterials() {
    return this.http.get<Material[]>(this.apiUrl);
  }
  //Firebase Syntaxes : 

  getMaterialsFromFireBase(): Observable<DocumentData[]> {
    const materialRef = collection(this.firestore, "materials");
    return collectionData(materialRef, { idField: "id" });
  }
  getMaterialFromFireBase(id: string): Observable<DocumentData> {
    const materialDocRef = doc(this.firestore, `materials/${id}`);
    return docData(materialDocRef, { idField: "id" });
  }
  addMaterialtoFireBase(materialParam: Material) {
    const materialRef = collection(this.firestore, "materials");
    return addDoc(materialRef, materialParam);
  }

  deleteMaterialFromFirebBase(material: Material) {
    const materialDocRef = doc(this.firestore, `materials/${material.id}`);
    return deleteDoc(materialDocRef)
  }

  updateMaterialFromFirebase(material:Material,newMaterial: Material) {

    const materialDocRef = doc(this.firestore, `materials/${material.id}`);
    return updateDoc(materialDocRef, { quantity: material.quantity - newMaterial.quantity});
  }
  editMaterialFromFirebBase(material:Material) {
    const materialDocRef = doc(this.firestore, `materials/${material.id}`);
    return updateDoc(materialDocRef, { text:material.text ,quantity: material.quantity, price: material.price})
  }

///////
  deleteMaterial(material: Material): Observable<Material> {
    const url = `${this.apiUrl}/${material.id}`;
    return this.http.delete<Material>(url);
  }

  addMaterial(material: Material): Observable<Material> {
    return this.http.post<Material>(this.apiUrl, material, httpOptions);
  }
  updateMaterial(
    material: Material,
    newMaterial: Material
  ): Observable<Material> {
    const url = `${this.apiUrl}/${material.id}`;
    return this.http.patch<Material>(
      url,
      {
        quantity: material.quantity - newMaterial.quantity,
      },
      httpOptions
    );
  }
}
