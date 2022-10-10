import React from "react";
import { useSelector } from "react-redux";

//This is to be used when mapping an array of Users to populate the AllUsersPage. It should be
//shorthand info about users to display on smaller card.

function SingleUser(props) {

    let value = props.user

    return(
        <div>
          SingleUser #{value}
        </div>
    )
}

export default SingleUser