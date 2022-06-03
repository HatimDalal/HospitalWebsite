// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase:{
  apiKey: "AIzaSyAzqO0ms7xHjFC2bjtu2Lf6dCe8fD-75Bw",
  authDomain: "hospitalwebsite-588cc.firebaseapp.com",
  projectId: "hospitalwebsite-588cc",
  storageBucket: "hospitalwebsite-588cc.appspot.com",
  messagingSenderId: "765384338393",
  appId: "1:765384338393:web:699f363598aeccdab087c8",
  measurementId: "G-Z3HDD5TV31"
}
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
import { initializeApp } from 'firebase/app';

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  //...
  apiKey: "AIzaSyAzqO0ms7xHjFC2bjtu2Lf6dCe8fD-75Bw",
  authDomain: "hospitalwebsite-588cc.firebaseapp.com",
  projectId: "hospitalwebsite-588cc",
  storageBucket: "hospitalwebsite-588cc.appspot.com",
  messagingSenderId: "765384338393",
  appId: "1:765384338393:web:699f363598aeccdab087c8",
  measurementId: "G-Z3HDD5TV31"
};

const app = initializeApp(firebaseConfig);
