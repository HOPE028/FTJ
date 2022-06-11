import { initializeApp } from 'firebase/app'
import { getFirestore } from '@firebase/firestore'

const firebaseConfig = {
  // apiKey: "AIzaSyCvp4HzofurR0UZ5yDPSCrnYFS_MxSeRcE",
  // authDomain: "tracking-11552.firebaseapp.com",
  // projectId: "tracking-11552",
  // storageBucket: "tracking-11552.appspot.com",
  // messagingSenderId: "1018520016911",
  // appId: "1:1018520016911:web:13de3a7f974b23555dab7a",
  // measurementId: "G-ZL7LP8ZE4Y"

  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
}

const app = initializeApp(firebaseConfig)

export const db = getFirestore(app)
