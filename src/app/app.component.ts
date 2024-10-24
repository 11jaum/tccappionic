import { Component } from '@angular/core';
import { getApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor() {}

  ngOnInit() {
    const app = getApp();
    console.log('Firebase App initialized:', app);
  
    const auth = getAuth();
    console.log('Auth instance:', auth);
  
    const firestore = getFirestore();
    console.log('Firestore instance:', firestore);
  }
}
