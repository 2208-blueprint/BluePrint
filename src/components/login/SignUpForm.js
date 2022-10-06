import React from 'react'

function SignUpForm({ toggle, setToggle }) {

    const [username, setUserName] = React.useState('')
    const [firstName, setFirstName] = React.useState('')
    const [lastName, setLastName] = React.useState('')
    const [email, setEmail] = React.useState('')
    const [profilePicture, setProfilePicture] = React.useState('')
    const [password, setPassword] = React.useState('')

    return (
    <div className='signup-main-container'>
        <div className='signup-wrapper'>
            <div className='signup-form-container'>
                <div className='signup-form-container-top'>
                    <h1>Signup for an account</h1>
                </div>
                <div className='signup-form-bottom'>
                    <form className='signup-form'>
                        <input type='text' placeholder='Username' onChange={(e) => setUserName(e.target.value)} value={username}/>
                        <input type='text' placeholder='First Name' onChange={(e) => setFirstName(e.target.value)} value={firstName}/>
                        <input type='text' placeholder='Last Name' onChange={(e) => setLastName(e.target.value)} value={lastName}/>
                        <input type='text' placeholder='Email' onChange={(e) => setEmail(e.target.value)} value={email}/>
                        <input type='password' placeholder='Password' onChange={(e) => setPassword(e.target.value)} value={password}/>
                        <input type='text' placeholder='Profile picture URL (optional)' onChange={(e) => setProfilePicture(e.target.value)} value={profilePicture}/>
                        <button className='signup-submit-button'>Sign Up</button>
                    </form>
                </div>
                </div>
            <div className='signup-toggle-container'>
                <h1>Already have an account?</h1>
                <button onClick={() => setToggle(!toggle)}>Log In</button>
            </div>
        </div>
    </div>
    )
}

export default SignUpForm