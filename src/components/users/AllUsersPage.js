import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getUsers } from "../../store/users/userSlice";
import SingleUser from "./SingleUser";
import Axios from 'axios';

function AllUsersPage() {
    let users = []
    const navigate = useNavigate()
    const dispatch = useDispatch()

    React.useEffect(() => {

        async function getAllUsers() {
            try{
                console.log("Trying getAllUsers")
                const allUsers = await Axios.get('/api/user/allUsers')
                .then(users.push(allUsers))
                .then(console.log(users))
                
            }
            catch(e) {
            console.error(e)
            }
        }

        getAllUsers()

    },[users])

    console.log('Users: ', users)

    function handleSelectSingleUser(evt) {
        evt.preventDefault()
        console.log(allUsers)
        console.log('Going to: ', evt.target.getAttribute('value'))
        navigate(`/users/${evt.target.getAttribute('value')}`)
    }
    return(
        <>
        <div className="all-users-title">
            All Users
        </div>
            <div className="all-users-container">
                {users.map((user, i) => 
                <div className="user-single-user-main-container" key={i} value={i + 1}onClick={handleSelectSingleUser}>
                <SingleUser user={user} />
                </div>
                )}
            </div>
        </>
    )
}

export default AllUsersPage