import React from 'react'
import SignIn from '../../components/sign-in/Sign-in'
import SignUp from '../../components/sign-up/Sign-up'
import {SignInAndSignUpContainer} from './sign-in-and-sign-up.styles'

const SignInAndSignUpPage = () => {
  return (
    <SignInAndSignUpContainer>
      <SignIn />
      <SignUp />
    </SignInAndSignUpContainer>
  )
}

export default SignInAndSignUpPage
