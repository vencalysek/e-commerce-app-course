import React from "react";
import "./custom-button.styles.scss";

const CustomButton = ({children, isGoogleSignIn, inverted, ...otherProps}) => {
  return (
    // if isGoogleSignIn == true --> add "google-sign-in" className to custom-button
    <button
      className={`${inverted ? "inverted" : ""} ${isGoogleSignIn ? "google-sign-in" : ""} custom-button`}
      {...otherProps}>
      {children}
    </button>
  );
};

export default CustomButton;
