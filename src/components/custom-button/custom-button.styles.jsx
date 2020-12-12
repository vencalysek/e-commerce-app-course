import styled, {css} from "styled-components";

const buttonStyles = css`
  background-color: black;
  color: white;
  border: 1px solid white;

  &:hover {
    background-color: white;
    color: black;
    border: 1px solid black;
  }
  
`

const googleSignInStyles = css`
  border: none;
    background-image: linear-gradient(
      to bottom right,
      #4285f4 0%,
      #0f9d58 100%
    );
    color: white;
    

    &:hover {
      background-image: linear-gradient(
      to bottom right,
      #0d7241 0%,
      #346bc4 100%
    );
    border: none
    }
`;

const invertedButtonStyles = css`
  background-color: white;
    color: black;
    border: 1px solid black;

    &:hover {
      background-color: black;
      color: white;
      border: 1px solid black;
    }
`;

const getButtonStyles = props => {
  if (props.isGoogleSignIn) {
    return googleSignInStyles
  } else if(props.inverted) {
    return invertedButtonStyles
  }

  return buttonStyles


  // return props.inverted ? invertedButtonStyles : buttonStyles
}

export const CustomButtonContainer = styled.button`
  min-width: 165px;
  width: auto;
  height: 50px;
  letter-spacing: 0.5px;
  line-height: 50px;
  padding: 0 35px 0 35px;
  font-size: 15px;
  
  text-transform: uppercase;
  font-family: "Open Sans Condensed";
  font-weight: bolder;
  border: none;
  cursor: pointer;
  transition: all 0.3s;
  display: flex;
  justify-content: center;
  outline: none;
  margin-top: auto;

  ${getButtonStyles}
  
`;



