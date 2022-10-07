import React, { useEffect } from 'react'
import Axios from 'axios'
import {useNavigate} from 'react-router-dom'

function Redirect() {
    const navigate = useNavigate()

    React.useEffect(() => {
        async function test() {
            const {data} = await Axios.get('/api/auth/login/success')
            window.localStorage.setItem('token', data.token)
            await Axios.get('/api/auth/test', {
              headers: {
                authorization: data.token
            }})
            navigate('/login')
        }
        test()
    }, [])

  return (
    <div>
    </div>
  )
}

export default Redirect