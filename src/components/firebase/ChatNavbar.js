import React, { useContext } from 'react'
import {signOut} from "firebase/auth"
import { auth } from '../../firebase'
import { AuthContext } from '../firebase/AuthContext'

function ChatNavbar() {
  const {currentUser} = useContext(AuthContext)

  return (
    <div className='firebase-navbar'>
        <span className="firebase-logo">Inbox</span>
        <div className="firebase-user">
            <span>{currentUser.displayName}</span>
            <img src={currentUser.photoURL} alt="" />
        </div>
    </div>
  )
}

export default ChatNavbar