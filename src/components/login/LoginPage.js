import React from 'react'
import { LoginForm, SignUpForm } from '../../components'

function LoginPage({setLoggedIn}) {

  const [toggle, setToggle] = React.useState(false)

  return (
    <>
      {
      toggle ?
        <SignUpForm toggle={toggle} setToggle={setToggle} setLoggedIn={setLoggedIn}/>
        :
        <LoginForm toggle={toggle} setToggle={setToggle} setLoggedIn={setLoggedIn}/>
        }
    </>
  )
}

export default LoginPage