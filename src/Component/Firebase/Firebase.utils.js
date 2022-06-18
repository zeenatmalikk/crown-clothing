import { initializeApp } from "firebase/app";
import {
  collection,
  getFirestore,
  getDocs,
  addDoc,
  setDoc,
  getDoc,
  doc,
  snapshotEqual,
  onSnapshot,
} from "firebase/firestore";
import {
  getAdditionalUserInfo,
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";

const config = {
  apiKey: "AIzaSyCSKcWMFZVOJovffP8bziRAn941_ngrA9A",
  authDomain: "crown-db-acfc6.firebaseapp.com",
  projectId: "crown-db-acfc6",
  storageBucket: "crown-db-acfc6.appspot.com",
  messagingSenderId: "810806809746",
  appId: "1:810806809746:web:75af7a98a6b397f906c24b",
  measurementId: "G-BPN20F2DLR",
};

const app = initializeApp(config);
export const db = getFirestore();
export const auth = getAuth(app);

// export const createUserProfileDocument = async (userAuth, additionalData) => {
//   const { displayName, email } = userAuth;
//   const createdAt = new Date();
//   if (!userAuth) return;
//   getDocs(colRef)
//     .then((snapshot) => {
//       let users = [];
//       snapshot.docs.forEach((doc) => {
//         users.push({ ...doc.data(), id: doc.id });
//       });

//       console.log(users);
//     })

//     .catch((err) => {
//       console.log(err.message);
//     });

//   return colRef;
// };

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  const docRef = doc(db, `user/${userAuth.uid}`);
  const colRef = collection(db, "user");
  console.log(userAuth.email);

  const snapShot = await getDoc(docRef);
  // console.log("id", snapShot.id);
  if (snapShot.exists()) {
    console.log("Document data:", snapShot.data());
    getDocs(colRef)
      .then((snap) => {
        let user = [];
        snap.docs.forEach((doc) => {
          user.push({ ...doc.data(), id: doc.id });
        });
      })
      .catch((err) => {
        console.log(err);
      });
     
  } else {
    // doc.data() will be undefined in this case
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await setDoc(doc(colRef), {
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error", error.message);
    }
  }

  return colRef;
};

export const signInWithGoogle = () => {
  const provider = new GoogleAuthProvider();
  signInWithPopup(auth, provider)
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
};
//       if(!snapshot.exists){
// const {displayName,email}=userAuth
// const createdAt=new Date()
// try {
//   await colRef.set({
//     displayName,email,createdAt,...additionalData
//   })
// } catch (error) {
//   console.log(error);
// }
//       }
// if (!snapshot) {
//   try {
//     addDoc(colRef, {
//       displayName,
//       email,
//       createdAt,
//       ...additionalData,
//     })
//       .then(() => {
//         console.log("addedfield");
//       })
//       .catch((err) => {
//         console.log("failed");
//       });
//   } catch (error) {}
// }
// export default initializeApp;
