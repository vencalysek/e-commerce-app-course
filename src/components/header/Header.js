import React from "react";
import {Link} from "react-router-dom";

import {auth} from "../../firebase/firebase.utils";
// redux
import {connect} from "react-redux";

import {ReactComponent as Logo} from "../../assets/crown.svg";

import CartIcon from "../cart-icon/cart-icon";

import "./header.styles.scss";
import CartDropdown from "../cart-dropdown/cart-dropdown";

const Header = ({currentUser, hidden}) => {
  return (
    <div className="header">
      <Link to="/" className="logo-container">
        <Logo className="logo" />
      </Link>

      <div className="options">
        <Link to="/shop" className="option">
          SHOP
        </Link>
        <Link to="contact" className="option">
          CONTACT
        </Link>

        {currentUser ? (
          <div className="option" onClick={() => auth.signOut()}>
            SIGN OUT
          </div>
        ) : (
          <Link className="option" to="/signin">
            SIGN IN
          </Link>
        )}
        <CartIcon />
      </div>
      {/* based on hidden value render dropdown */}
      {
        hidden ? null : <CartDropdown />
      }
    </div>
  );
};

const mapStateToProps = ({user: {currentUser}, cart: {hidden}}) => ({
  currentUser,
  hidden,
});

export default connect(mapStateToProps)(Header);
