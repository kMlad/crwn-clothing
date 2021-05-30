import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./header.styles.scss";
import { ReactComponent as Logo } from "../../assets/crown-logo.svg";
import { auth } from "../../firebase/firebase.utils";

const Header = ({ currentUser }) => {
  // useEffect(() => console.log("Current user is:" + currentUser));
  return (
    <div className="header">
      <Link to="/" className="logo-container">
        <Logo className="logo" />
      </Link>
      <div className="options-container">
        <Link className="option" to="/shop">
          SHOP
        </Link>
        <Link className="option" to="/contact">
          CONTACT
        </Link>
        {currentUser ? (
          <div className="option" onClick={() => auth.signOut()}>
            SIGN OUT
          </div>
        ) : (
          <Link className="option" to="/signin-signup">
            SIGN IN
          </Link>
        )}
      </div>
    </div>
  );
};

export default Header;
