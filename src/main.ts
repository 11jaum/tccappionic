import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));

bootstrapApplication(AppComponent), {
  providers : [
    provideFirebaseApp(() => initializeApp({"projectId":"papocabeca-38f70",
      "appId":"1:425794308999:web:b40472403ca248dcc62122",
      "storageBucket":"papocabeca-38f70.appspot.com",
      "apiKey":"AIzaSyAXLavhlGuIkAzoNNBoehvrJPjbwiZGXBw",
      "authDomain":"papocabeca-38f70.firebaseapp.com",
      "messagingSenderId":"425794308999","measurementId":"G-45SEB2LGJY"})),
  ]
}
