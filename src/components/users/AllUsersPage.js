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
        navigate(`/users/${evt.key}`)
    }
    return(
        <>
        <div className="all-users-title">
            All Users
        </div>
            <div className="all-users-container">
                {users.map((user, i) => 
                    <div key={i} onClick={handleSelectSingleUser} className="single-user-container">
                        User #{user}
                    </div>
                )}
            </div>
        </>
    )
}

export default AllUsersPage