import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePagecomponent from "./Page/homepage/HomePage.component";
import Shop from "./Page/shop/Shop";
import Header from "./Component/Header/Header";
import SignInSignUp from "./Page/SignIn-SignUp Page/SignInSignUp";
import {
  auth,
  createUserProfileDocument,
} from "./Component/Firebase/Firebase.utils";
import { useEffect, useState } from "react";
import { onSnapshot } from "firebase/firestore";

function App() {
  const [currentUser, setcurrentUser] = useState(null);
  // const unsubscribeFromAuth =()=> null;

  useEffect(() => {
    auth.onAuthStateChanged(async (userAuth) => {
      // setcurrentUser(userAuth);

      if (userAuth) {
        const colRef = await createUserProfileDocument(userAuth);

        onSnapshot(colRef, (snap) => {
          snap.docs.forEach((doc) => {
            setcurrentUser({ id: doc.id, ...doc.data() });
            console.log("cu", currentUser);
          });
        });
      }
      setcurrentUser(userAuth);
    });
  }, []);
  return (
    <div>
      <Router>
        <Header currentUser={currentUser} />
        <Routes>
          <Route path="/" element={<HomePagecomponent />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/signin" element={<SignInSignUp />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
