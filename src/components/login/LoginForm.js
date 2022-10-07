import React from 'react'
import Google from '../images/google.png'
import Facebook from '../images/facebook.png'
import Github from '../images/github.png'
import Axios from 'axios'

function LoginForm({ toggle, setToggle }) {

  const [username, setUserName] = React.useState('')
  const [password, setPassword] = React.useState('')

  const google = () => {
    window.open('http://localhost:3000/auth/google', '_self')
  }
  const facebook = () => {
    window.open('http://localhost:3000/auth/facebook', '_self')
  }
  const github = () => {
    window.open('http://localhost:3000/auth/github', '_self')
  }

  const handleSubmit = async(e) => {
    e.preventDefault();
    let loginObj = {
      username: username,
      password: password,
    };

    try {
      const auth = await Axios.post("/api/auth/login", loginObj);
      const { token } = auth.data;
      window.localStorage.setItem("token", token);

      setUserName("");
      setPassword("");

    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className='login-main-container'>
        <div className='login-signup-wrapper'>
            <div className='login-signup-form-container'>
              <div className='login-form-container-top'>
                <h1>Login to your account</h1>
                <small>Login using social networks</small>
                <div className='login-form-container-social-buttons'>
                    <div className='loginButton google' onClick={google}>
                        <img src={Google} alt='' className='icon' />
                    </div>
                    <div className='loginButton facebook' onClick={facebook}>
                        <img src={Facebook} alt='' className='icon' />
                    </div>
                    <div className='loginButton github' onClick={github}>
                        <img src={Github} alt='' className='icon' />
                    </div>
                  </div>
              </div>
              <div className='login-form-center'>
                    <div className='login-line'></div>
                    <div className='login-or'>OR</div>
                </div>
              <div className='login-form-bottom'>
                <form className='login-form' onSubmit={handleSubmit}>
                    <input type='text' placeholder='Username' onChange={(e) => setUserName(e.target.value)} value={username}/>
                    <input type='password' placeholder='Password' autofill='off' onChange={(e) => setPassword(e.target.value)} value={password}/>
                    <button className='login-submit-button'>Login</button>
                </form>
                  </div>
              </div>
            <div className='login-signup-toggle-container'>
              <h1>New to BluePrint?</h1>
              <small>Sign up and start building!</small>
              <button onClick={() => setToggle(!toggle)}>Sign Up</button>
            </div>
        </div>
    </div>
  )
}

export default LoginForm