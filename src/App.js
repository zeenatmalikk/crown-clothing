import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePagecomponent from "./Page/homepage/HomePage.component";
import Shop from "./Page/shop/Shop";
import Header from "./Component/Header/Header";
import SignInSignUp from "./Page/SignIn-SignUp Page/SignInSignUp";
import { auth } from "./Component/Firebase/Firebase.utils";
import { useEffect, useState } from "react";

function App() {
  const [currentUser, setcurrentUser] = useState(null);
  const unsubscribeFromAuth =()=> null;
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      setcurrentUser(user);
      console.log(user);
    });
    return () => {
    // unsubscribeFromAuth();
    console.log('unmount');
    };
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
