import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Google from "../images/google.png";
import Github from "../images/github.png";
import Twitch from "../images/twitch.png";
import Axios from "axios";
import { toast } from "react-toastify";
import "react-loading-skeleton/dist/skeleton.css";
import { getSingleUser } from "../../store/users/singleUserSlice";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";

function LoginForm({ toggle, setToggle, setLoggedIn }) {
  const [username, setUserName] = React.useState("");
  const [password, setPassword] = React.useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const toastError = (err) => toast.error(err);
  const toastLogin = (msg) => toast.success(msg);

  const google = async () => {
    window.open("https://fsa-blueprint.herokuapp.com/auth/google", "_self");
  };
  const github = async () => {
    window.open("https://fsa-blueprint.herokuapp.com/auth/github", "_self");
  };
  const twitchtv = async () => {
    window.open("https://fsa-blueprint.herokuapp.com/auth/twitch", "_self");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let loginObj = {
      username: username,
      password: password,
    };

    try {
      const authorize = await Axios.post("/api/auth/login", loginObj);
      const { token } = authorize.data;
      window.localStorage.setItem("token", token);

      const currentUser = await Axios.get("api/profile", {
        headers: {
          authorization: token,
        },
      });

      await signInWithEmailAndPassword(auth, currentUser.data.email, password);

      setUserName("");
      setPassword("");
      setLoggedIn(true);
      dispatch(getSingleUser(token));
      navigate("/");
      toastLogin("You are logged in!");
    } catch (error) {
      toastError("Incorrect email/password");
      console.log(error);
    }
  };

  return (
    <div className="login-main-container">
    <div className="login-signup-wrapper">
      <div className="login-signup-form-container">
        <div className="login-form-container-top">
          <h1>Login to your account</h1>
          <small>Login using social networks</small>
          <div className="login-form-container-social-buttons">
            <div className="loginButton google" onClick={google}>
              <img src={Google} alt="" className="icon" />
            </div>
            <div className="loginButton twitch" onClick={twitchtv}>
              <img src={Twitch} alt="" className="icon" />
            </div>
            <div className="loginButton github" onClick={github}>
              <img src={Github} alt="" className="icon" />
            </div>
          </div>
        </div>
        <div className="login-form-center">
          <div className="login-line"></div>
          <div className="login-or">OR</div>
        </div>
        <div className="login-form-bottom">
          <form className="login-form" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Username"
              onChange={(e) => setUserName(e.target.value)}
              value={username}
            />
            <input
              type="password"
              placeholder="Password"
              autofill="off"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
            <button className="login-submit-button">Login</button>
          </form>
        </div>
      </div>
      <div className="login-signup-toggle-container">
        <h1>New to BluePrint?</h1>
        <small>Sign up and start building!</small>
        <button onClick={() => setToggle(!toggle)}>Sign Up</button>
      </div>
    </div>
  </div>
    );
  }

  export default LoginForm;
