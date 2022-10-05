import React from 'react'
import Google from './images/google.png'
import Facebook from './images/facebook.png'
import Github from './images/github.png'
import triangleBG from './images/trianglify-lowres.png'

function LoginPage() {

  const [username, setUserName] = React.useState('')
  const [password, setPassword] = React.useState('')


  return (
    <div className='login-main-container'>
        <div className='login-signup-wrapper'>
            <div className='login-signup-form-container'>
              <div className='login-form-container-top'>
                <h1>Login to your account</h1>
                <small>Login using social networks</small>
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
              <div className='login-form-center'>
                    <div className='login-line'></div>
                    <div className='login-or'>OR</div>
                </div>
              <div className='login-form-bottom'>
                <form className='login-form'>
                    <input type='text' placeholder='Username' onChange={(e) => setUserName(e.target.value)} value={username}/>
                    <input type='text' placeholder='Password' onChange={(e) => setPassword(e.target.value)} value={password}/>
                    <button className='login-submit-button'>Login</button>
                </form>
                  </div>
              </div>
            <div className='login-signup-toggle-container'>
              <h1>New to BluePrint?</h1>
              <small>Sign up and start building!</small>
              <button>Sign Up</button>
            </div>
        </div>
    </div>
  )
}

export default LoginPage