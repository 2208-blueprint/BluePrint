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
                setAllUsers(allUsers.data) 
            }
            catch(e) {
            console.error(e)
            }
        }
        getAllUsers()

    },[])

    function handleSelectSingleUser(evt) {
        evt.preventDefault()
        navigate(`/users/${evt.target.getAttribute('value')}`)
    }
    return(
        <>
        <div className="all-users-title">
            All Users
        </div>
            <div className="all-users-container">
                { allUsers && allUsers.map((user, i) => 
                <div className="user-single-user-main-container" key={i} value={i + 1} onClick={handleSelectSingleUser}>
                <SingleUser user={user} />
                </div>
                )}
            </div>
        </>
    )
}

export default AllUsersPage