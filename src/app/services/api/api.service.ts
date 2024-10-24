import { Injectable } from '@angular/core';
import { doc, Firestore, getDoc, setDoc } from 'firebase/firestore';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private firestore: Firestore) { }

  docRef(path) {
    return doc(this.firestore, path);
  }
  
  setDocument(path, data) {
    const dataRef = this.docRef(path);
    return setDoc(dataRef, data);
  }

  getDocById(path) {
    const dataRef = this.docRef(path);
    return getDoc(dataRef);
  }
}

//     return setDoc<any>(dataRef, data);