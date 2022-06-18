import React from 'react'
import Signup from '../../Component/Sign-up/Signup'
import SignIn from '../../Component/SignIn/SignIn'
import "./SigninSignUp.scss"
const SignInSignUp = () => {
  return (
    <div className='sign-in-and-sign-up'>
        <SignIn/><Signup/>
    </div>
  )
}

export default SignInSignUp