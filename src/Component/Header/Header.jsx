import React from "react";
import { Link } from "react-router-dom";

import { ReactComponent as Logo } from "../../assets/crown.svg";
import { auth } from "../Firebase/Firebase.utils";
import "./Header.scss";

const Header = ({ currentUser }) => (
  <div className="header">
    <Link className="logo-container" to="/">
      <Logo className="logo" />
    </Link>
    <div className="options">
      <Link className="option" to="/shop">
        SHOP
      </Link>
      <Link className="option" to="/shop">
        CONTACT
      </Link>
      {currentUser ? (
        <div className="options" onClick={() => auth.signOut()}>SIGNOUT</div>
      ) : (
        <Link className="options" to='/signin'>SIGNIN</Link>
      )}
    </div>
  </div>
);

export default Header;
