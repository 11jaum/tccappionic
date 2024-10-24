import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { SignupPageModule } from './pages/login/signup/signup.module';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { getApp, initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, indexedDBLocalPersistence, initializeAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { Capacitor } from '@capacitor/core';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, SignupPageModule, ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }, provideFirebaseApp(() => initializeApp({"projectId":"papocabeca-38f70",
    "appId":"1:425794308999:web:b40472403ca248dcc62122",
    "storageBucket":"papocabeca-38f70.appspot.com",
    "apiKey":"AIzaSyAXLavhlGuIkAzoNNBoehvrJPjbwiZGXBw",
    "authDomain":"papocabeca-38f70.firebaseapp.com",
    "messagingSenderId":"425794308999","measurementId":"G-45SEB2LGJY"})),
    provideAuth(() => getAuth()),
    provideAuth(() => {
      if (Capacitor.isNativePlatform()) {   
        return initializeAuth(getApp(), {
          persistence: indexedDBLocalPersistence
      })
      } else {
        return getAuth()
      }
    }),
    provideFirestore(() => getFirestore())],
  bootstrap: [AppComponent],
})
export class AppModule {}
