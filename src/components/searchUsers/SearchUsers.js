import React from "react";
import { BsSearch } from "react-icons/bs";
import { IconContext } from "react-icons";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import axios from "axios";

const SearchUsers = () => {
  const [users, setUsers] = React.useState([]);
  const [search, setSearch] = React.useState("");
  const navigate = useNavigate();
  const loggedUser = useSelector((state) => state.singleUser);
  const toastError = (err) => toast.error(err);
  const toastSuccess = (msg) => toast.success(msg);

  React.useEffect(() => {
    async function getUsers() {
      const { data } = await axios.get("/api/users/allUsers");
      setUsers(data);
    }
    getUsers();
  }, []);

  function numCreated(user) {
    const filtered = user.components.filter((component) => {
      return component.user_component.isAuthor === true;
    });
    return filtered;
  }

  function goToUser(event) {
    navigate(`/users/${event.currentTarget.getAttribute("value")}`);
  }

  function searchHandler(event) {
    setSearch(event.target.value);
  }

  const filteredUsers = users.filter((user) => {
    if (user.username.toLowerCase().includes(search.toLowerCase())) {
      return true;
    } else {
      return false;
    }
  });

  const isFollowing = (user) => {
    for (let i = 0; i < user.followers.length; i++) {
      if (user.followers[i].id === loggedUser.id) {
        return true;
      }
    }
    return false;
  };

  const followHandler = async (userId, username) => {
    await axios.put(
      `api/users/follow/${userId}`,
      {},
      {
        headers: {
          authorization: window.localStorage.getItem("token"),
        },
      }
    );
    const { data } = await axios.get("/api/users/allUsers");
    setUsers(data);
    toastSuccess(`You are now following ${username}`);
  };

  const unFollowHandler = async (userId, username) => {
    await axios.put(
      `api/users/unfollow/${userId}`,
      {},
      {
        headers: {
          authorization: window.localStorage.getItem("token"),
        },
      }
    );
    const { data } = await axios.get("/api/users/allUsers");
    setUsers(data);
    toastSuccess(`You are now not following ${username}`);
  };

  return (
    <div id="search-user-root">
      <div className="search-user-bar-container">
        <input
          onChange={searchHandler}
          placeholder="Search by username..."
        ></input>
        <div className="search-user-icon">
          <IconContext.Provider value={{ size: "30px" }}>
            <BsSearch />
          </IconContext.Provider>
        </div>
      </div>
      <div className="search-user-results">
        {filteredUsers?.length === 0 ? (
          <div className="search-user-none">
            <h1>No users found with "{search}"</h1>
          </div>
        ) : (
          filteredUsers?.map((user) => (
            <div className="search-user-card" key={user.id} value={user.id}>
              <img src={user.img}></img>
              <div className="search-user-text">
                <h1 onClick={goToUser} value={user.id}>
                  {user.username}
                </h1>
                <p>{user.followers.length} Followers</p>
                <p>{numCreated(user).length} Components</p>
                {window.localStorage.getItem("token") ? (
                  user.id === loggedUser.id ? (
                    <div></div>
                  ) : isFollowing(user) ? (
                    <p
                      onClick={() => unFollowHandler(user.id, user.username)}
                      className="search-user-follow"
                    >
                      Unfollow
                    </p>
                  ) : (
                    <p
                      onClick={() => followHandler(user.id, user.username)}
                      className="search-user-follow"
                    >
                      Follow
                    </p>
                  )
                ) : (
                  <div></div>
                )}
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default SearchUsers;
