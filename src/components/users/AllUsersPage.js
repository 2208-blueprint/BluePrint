import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getUsers } from "../../store/users/userSlice";
import SingleUser from "./SingleUser";
import Axios from 'axios';

function AllUsersPage() {
    // let users = []
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const users = []
    const [allUsers, setAllUsers] = useState([])

    React.useEffect(() => {

        async function getAllUsers() {
            try{
                const allUsers = await Axios.get('/api/users/allUsers');
                setAllUsers(allUsers)
                
            }
            catch(e) {
            console.error(e)
            }
        }

        getAllUsers()
        console.log('getAllUsers: ', allUsers)

    },[])

    function handleButtonClick(evt) {
        evt.preventDefault()
        console.log(allUsers)
    }
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
        <button onClick={handleButtonClick}>Click me!</button>
            <div className="all-users-container">
                { allUsers && allUsers.map((user, i) => 
                <div className="user-single-user-main-container" key={i} value={i + 1}onClick={handleSelectSingleUser}>
                <SingleUser user={user} />
                </div>
                )}
            </div>
        </>
    )
}

export default AllUsersPage