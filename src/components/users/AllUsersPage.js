import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import SingleUser from "./SingleUser";

function AllUsersPage() {
    let allUsers = useSelector((state) => state.users)
    let users = ['1','2','3','4','5','6','7','8','9', '10', '11', '12']
    let navigate = useNavigate()

    function handleSelectSingleUser(evt) {
        evt.preventDefault()
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