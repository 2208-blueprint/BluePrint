import React from 'react'
import Axios from 'axios'
import {useNavigate} from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Redirect() {

    const navigate = useNavigate()
    const toastLogin = (msg) => toast.success(msg);
    const toastError = (msg) => toast.error(msg);

    React.useEffect(() => {

        async function test() {
          try{
            const {data} = await Axios.get('/api/auth/login/success')
            window.localStorage.setItem('token', data.token)
            navigate('/')
            toastLogin('You are logged in!')
          }
          catch(e) {
            toastError('Error logging in!')
            console.log(e)
          }
        }
        test()
    }, [])

  return (
    <></>
  )
}

export default Redirect