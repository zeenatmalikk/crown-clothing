import {initializeApp} from "firebase/app";
import {getAuth, GoogleAuthProvider, signInWithPopup} from 'firebase/auth'

const config = {
  apiKey: "AIzaSyCSKcWMFZVOJovffP8bziRAn941_ngrA9A",
  authDomain: "crown-db-acfc6.firebaseapp.com",
  projectId: "crown-db-acfc6",
  storageBucket: "crown-db-acfc6.appspot.com",
  messagingSenderId: "810806809746",
  appId: "1:810806809746:web:75af7a98a6b397f906c24b",
  measurementId: "G-BPN20F2DLR",
};

const app=initializeApp(config);

export const auth = getAuth(app);
// export const firestore = firebase.firestore();
//google select accounts button

// provider.setCustomParameters({ prompt: "select_account" });
//use in signin component

export const signInWithGoogle = () => {
  const provider = new GoogleAuthProvider();
   signInWithPopup(auth, provider)
   .then((res)=>{
    console.log(res);
   })
   .catch((err)=>{
    console.log(err);
   })
};

// export default initializeApp;
