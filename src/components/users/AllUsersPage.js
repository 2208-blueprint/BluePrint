import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getUsers } from "../../store/users/userSlice";
import SingleUser from "./SingleUser";

function AllUsersPage() {
    const allUsers = useSelector((state) => state.users)
    let users = ['1','2','3','4','5','6','7','8','9', '10', '11', '12']
    const navigate = useNavigate()
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getUsers())
    },[])

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