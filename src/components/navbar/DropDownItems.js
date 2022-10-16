import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { signOut } from "firebase/auth"
import { auth } from '../../firebase'
import { AuthContext } from '../firebase/AuthContext'

function DropDownItems({ setDropDown, loggedIn, setLoggedIn }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const logout = () => {
    window.localStorage.removeItem("token");
    setLoggedIn(false);
    // dispatch(toggle())
    navigate("/");
  };

  return (
    <>
      <div className="navbar-dropdown-container">
        <li className="navbar-dropdown-item" onClick={() => setDropDown(false)}>
          <Link to={window.localStorage.token ? "/profile" : "/login"}>
            👤 Profile
          </Link>
        </li>
        <li className="navbar-dropdown-item" onClick={() => setDropDown(false)}>
          <Link to="/profile/checkout">🛒 Your Cart</Link>
        </li>
        <li className="navbar-dropdown-item" onClick={() => setDropDown(false)}>
          {loggedIn ? (
            <button onClick={() => logout()}>Logout</button>
          ) : (
            <button onClick={() => navigate("/login")}>Login</button>
          )}
        </li>
      </div>
    </>
  );
}

export default DropDownItems
