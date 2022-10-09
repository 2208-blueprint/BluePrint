import React from 'react'
import { LoginForm, SignUpForm } from '../../components'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

function LoginPage() {

  const [toggle, setToggle] = React.useState(false)

  return (
    <>
      {
      toggle ?
        <SignUpForm toggle={toggle} setToggle={setToggle}/>
        :
        <LoginForm toggle={toggle} setToggle={setToggle}/>
        }
    </>
  )
}

export default LoginPage