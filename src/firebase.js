// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import { getStorage, ref } from 'firebase/storage'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDkl0Q1I7_KM2gQnZQ8UnIcFkIjFL6cMJA',
  authDomain: 'cardscanner-101.firebaseapp.com',
  projectId: 'cardscanner-101',
  storageBucket: 'cardscanner-101.appspot.com',
  messagingSenderId: '356088795075',
  appId: '1:356088795075:web:520456ff55d9ab317e7776'
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const auth = getAuth(app)
const db = getFirestore(app)
const storage = getStorage(app)

export { app, auth, db, storage }
