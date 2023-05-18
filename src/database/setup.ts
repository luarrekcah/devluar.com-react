import { initializeApp, getApps, getApp } from '@firebase/app';
import { getDatabase } from '@firebase/database';
import {getStorage} from '@firebase/storage';

const firebaseConfig = {
  apiKey: process.env.apiKey,
  authDomain: process.env.authDomain,
  projectId: process.env.projectId,
  storageBucket: process.env.storageBucket,
  messagingSenderId: process.env.messagingSenderId,
  appId: process.env.appId,
  measurementId: process.env.measurementId,
};

if (!getApps().length) {
  initializeApp(firebaseConfig);
}

const app = getApp();
const database = getDatabase(app);
const storage = getStorage(app);

console.log('Conectado ao Firebase Database');

export { app, database, storage };
