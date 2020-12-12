import React from "react";
import {CustomButtonContainer} from "./custom-button.styles";

const CustomButton = ({children, ...props}) => {
  return (
    // if isGoogleSignIn == true --> add "google-sign-in" className to custom-button
    <CustomButtonContainer className='custom-button' {...props}>{children}</CustomButtonContainer>
  );
};

export default CustomButton;
