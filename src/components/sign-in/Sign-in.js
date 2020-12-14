import React, {Component} from "react";

import CustomButton from "../custom-button/Custom-button";
import FormInput from "../form-input/Form-input";

import {auth, signInWithGoogle} from "../../firebase/firebase.utils";

import {SignInContainer, Title, ButtonsContainer} from "./sign-in.styles";

class SignIn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
    };
  }

  handleSubmit = async e => {
    e.preventDefault();

    // login func
    const {email, password} = this.state;

    try {
      await auth.signInWithEmailAndPassword(email, password);

      // if succeeds reset state and form
      this.setState({email: "", password: ""});
    } catch (error) {
      alert(`${error.message}`);
    }
  };

  handleChange = e => {
    const {value, name} = e.target;

    // [name] -> will use prop name based on input field
    this.setState({[name]: value});
  };

  render() {
    return (
      <SignInContainer>
        <Title>I already have an account</Title>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          {/* custom reusable input component */}
          <FormInput
            name="email"
            type="email"
            value={this.state.email}
            handleChange={this.handleChange}
            label="email"
            required
          />

          <FormInput
            type="password"
            name="password"
            value={this.state.password}
            handleChange={this.handleChange}
            label="password"
            required
          />

          <ButtonsContainer>
            <CustomButton type="submit">Sign In</CustomButton>
            <CustomButton type='button' isGoogleSignIn onClick={signInWithGoogle}>
              Sign In With Google
            </CustomButton>
          </ButtonsContainer>
        </form>
      </SignInContainer>
    );
  }
}

export default SignIn;
