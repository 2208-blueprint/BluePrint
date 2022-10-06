import React from 'react'
import { LoginForm, SignUpForm } from '../../components'

function LoginPage() {

  const test = false;

  return (
    <>
      {test ? <SignUpForm /> : <LoginForm />}
    </>
  )
}

export default LoginPage