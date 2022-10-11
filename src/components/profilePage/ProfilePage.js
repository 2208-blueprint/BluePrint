import React from 'react'
import Axios from 'axios'

function ProfilePage() {
    const [user, setUser] = React.useState()

    React.useEffect(() => {
        async function getUser() {
            try {
                const token = window.localStorage.getItem('token');
                if (token) {
                    const {data} = await Axios.get('api/profile', {
                        headers: {
                            authorization: token,
                        }
                    })
                    setUser(data)
                }
            }
            catch(err) {
                console.log(err);
            }
        }
        getUser()
    }, [])

  return (
    <div>
        test
    </div>
  )
}

export default ProfilePage