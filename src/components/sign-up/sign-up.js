import React, {Component} from "react";

import FormInput from "../form-input/form-input";
import CustomButton from "../custom-button/custom-button";

import {auth, createUserProfileDocument} from "../../firebase/firebase.utils";

import "./sign-up.styles.scss";

class SignUp extends Component {
  constructor() {
    super();

    this.state = {
      displayName: "",
      email: "",
      password: "",
      confirmPassword: "",
    };
  }

  handleSubmit = async e => {
    e.preventDefault();

    // destructure variables from state
    const { displayName, email, password, confirmPassword } = this.state;

    // check if passwords are same
    if (password !== confirmPassword) {
      alert("Passwords don't match");
      return;
    }

    // create new account
    try {
      // create user with email and password
      // destructure user from return on auth.
      const {user} = await auth.createUserWithEmailAndPassword(email, password);

      // create profile docs
      await createUserProfileDocument(user, { displayName });

      // after creating profile doc, cleare form resset state
      this.setState({displayName: "", email: "", password: "", confirmPassword: ""});
    } catch (error) {
      console.log(error);
      alert(`${error.message}`)
    }
  };

  handleChange = e => {
    const { name, value } = e.target;

    // [name] -> will use prop name based on input field
    this.setState({[name]: value});
  };

  render() {
    const {displayName, email, password, confirmPassword} = this.state;
    return (
      <div className="sign-up">
        <h2 className="title">I do not have a account</h2>
        <span>Sign up with your email and password</span>

        <form onSubmit={this.handleSubmit} className="sign-up-form">
          <FormInput
            type="text"
            name="displayName"
            value={displayName}
            onChange={this.handleChange}
            label="Display Name"
            required
          />
          <FormInput
            type="email"
            name="email"
            value={email}
            onChange={this.handleChange}
            label="Email"
            required
          />
          <FormInput
            type="password"
            name="password"
            value={password}
            onChange={this.handleChange}
            label="Password"
            required
          />
          <FormInput
            type="password"
            name="confirmPassword"
            value={confirmPassword}
            onChange={this.handleChange}
            label="Confirm Password"
            required
          />
          <CustomButton type="submit">SIGN UP</CustomButton>
        </form>
      </div>
    );
  }
}

export default SignUp;
