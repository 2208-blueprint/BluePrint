import React from 'react'
import { LoginForm, SignUpForm } from '../../components'

function LoginPage() {

  const test = true;

  return (
    <>
      {test ? <SignUpForm /> : <LoginForm />}
    </>
  )
}

export default LoginPage