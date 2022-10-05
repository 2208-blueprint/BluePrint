import React from 'react'
import Google from './images/google.png'
import Facebook from './images/facebook.png'
import Github from './images/github.png'

function LoginPage() {


  return (
    <div className='login-main-container'>
        <div className='login-signup-wrapper'>
            <div className='login-signup-form-container'>
              <div className='login-form-container-top'>
                <h1>Login</h1>
                <p>Login using social networks</p>
                <div className='login-form-container-social-buttons'>
                    <div className='loginButton google'>
                        <img src={Google} alt='' className='icon' />
                    </div>
                    <div className='loginButton facebook'>
                        <img src={Facebook} alt='' className='icon' />
                    </div>
                    <div className='loginButton github'>
                        <img src={Github} alt='' className='icon' />
                    </div>
                    </div>
              </div>
            </div>
            <div className='login-signup-toggle-container'>
              test2
            </div>
        </div>
    </div>
  )
}

export default LoginPage