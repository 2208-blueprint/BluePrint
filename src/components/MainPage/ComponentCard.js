import React, { useState } from "react";
import axios from "axios";
import Less from "less";
import { Link } from "react-router-dom";
import {
  FaHeart,
  FaCommentAlt,
  FaSave,
  FaRegHeart,
  FaHeartBroken,
} from "react-icons/fa";
import { IconContext } from "react-icons";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BsHeartFill } from "react-icons/bs";

function ComponentCard({ componentId }) {
  const [html, setHTML] = useState("");
  const [css, setCSS] = useState("");
  const [less, setLess] = useState("");
  const [js, setJS] = useState("");
  const [srcDoc, setSrcDoc] = useState("");
  const [title, setTitle] = useState("title of component");
  const [liked, setLiked] = useState(false);
  const [likes, setLikes] = useState(0);
  const [comments, setComments] = useState(0);
  const [saved, setSaved] = useState(false);
  const [saves, setSaves] = useState(0);
  const [author, setAuthor] = useState("");
  const [type, setType] = useState("");
  const [markup, setMarkup] = useState("");
  const [styling, setStyling] = useState("");
  const [component, setComponent] = useState("");

  const toastPopup = (msg) => {
    toast.dark(msg, { autoClose: 2000 });
  };
  const icon1 = <FaHeartBroken />;

  async function likeHandler(e) {
    const token = window.localStorage.getItem("token");
    try {
      e.preventDefault();
      if (window.localStorage.getItem("token")) {
        if (!liked) {
          setLikes(likes + 1);
          await axios.post(
            `/api/components/${componentId}/favorite`,
            {},
            {
              headers: { authorization: token },
            }
          );
          toastPopup("❤️ Liked!");
          console.log("after axios");
        } else {
          setLikes(likes - 1);
          await axios.delete(`/api/components/${componentId}/remove-favorite`, {
            headers: { authorization: token },
          });
          toastPopup("💔 Unliked!");
          console.log("after axios");
        }
        setLiked(!liked);
      } else {
        toastPopup("🖥️ Only logged in users can give likes!");
      }
    } catch (err) {
      console.log(err);
    }
  }
  async function saveHandler(e) {
    const token = window.localStorage.getItem("token");
    e.preventDefault();
    if (window.localStorage.getItem("token")) {
      if (!saved) {
        setSaves(saves + 1);
        await axios.post(
          `/api/components/${componentId}/save`,
          {},
          {
            headers: { authorization: token },
          }
        );
        toastPopup("💾 Saved to your profile!");
        console.log("after axios");
      } else {
        setSaves(saves - 1);
        await axios.delete(`/api/components/${componentId}/remove-save`, {
          headers: { authorization: token },
        });
        toastPopup("💾 Removed from your profile!");
        console.log("after axios");
      }
      setSaved(!saved);
    } else {
      toastPopup("🖥️ Only logged in users can save to profile!");
    }
  }

  React.useEffect(() => {
    setSrcDoc(`
            <html>
              <body><div id="root"></div>${html}</body>
              <style>${css}</style>
              <script type="text/babel">${js}</script>
              <script src="https://unpkg.com/react@17/umd/react.development.js"></script>
              <script src="https://unpkg.com/react-dom@17/umd/react-dom.development.js"></script>
              <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
            </html>
          `);
  }, [html, css, js]);

  // load in the apropriate component
  React.useEffect(() => {
    async function getComp() {
      const { data } = await axios.get(`/api/components/${componentId}`);
      const token = window.localStorage.getItem("token");
      if (token) {
        const componentLikes = data.users.filter(
          (user) => user["user_component"].isFavorite
        );
        const componentSaves = data.users.filter(
          (user) => user["user_component"].isSaved
        );
        const profile = await axios.get(`/api/users/profile`, {
          headers: { authorization: token },
        });
        const currentUser = profile.data;
        if (componentSaves.find((user) => user.id === currentUser.id)) {
          setSaved(true);
        }
        if (componentLikes.find((user) => user.id === currentUser.id)) {
          setLiked(true);
        }
      }

      setComponent(data);
      if (data?.framework === "html") {
        setHTML(data?.markup);
      } else {
        setJS(data?.markup);
      }
      if (data?.stylingFramework === "css") {
        setCSS(data?.stylesheet);
      } else {
        setLess(data?.stylesheet);
      }
      setTitle(data.name);
      const numberOfComments = data.comments;
      setComments(numberOfComments.length);
      setMarkup(data.framework);
      setStyling(data.stylingFramework);
      setType(data.type);

      const componentAuthor = data.users.find(
        (user) => user["user_component"].isAuthor
      );
      const componentLikes = data.users.filter(
        (user) => user["user_component"].isFavorite
      );
      const componentSaves = data.users.filter(
        (user) => user["user_component"].isSaved
      );

      setSaves(componentSaves?.length);
      setLikes(componentLikes?.length);
      if (componentAuthor?.username) {
        setAuthor(componentAuthor?.username);
      } else {
        setAuthor(`BluePrint Community`);
      }
    }
    getComp();
  }, []);

  // compile the less into css if less changes
  React.useEffect(() => {
    Less.render(less).then(function (output) {
      setCSS(output.css);
    });
  }, [less]);
  return (
    <div className="component-card-outer">
      <Link
        to={`/components/${componentId}`}
        style={{ textDecoration: "none" }}
      >
        <div className="component-card-main">
          <div className="component-card-thumbnail">
            <div className="component-card-cover">
              {" "}
              <div className="component-card-info">
                {title} by {author}
              </div>
            </div>

            <iframe
              key={componentId}
              srcDoc={srcDoc}
              title="output"
              sandbox="allow-scripts"
              width="522px"
              height="522px"
              scrolling="no"
              frameBorder="0"
            />
          </div>
        </div>
      </Link>
      <div className="component-card-icons">
        <div className="component-card-heart-container" onClick={likeHandler}>
          {liked ? (
            <IconContext.Provider
              value={{ size: "25px", className: "component-card-heart" }}
            >
              <FaHeart />
            </IconContext.Provider>
          ) : (
            <IconContext.Provider
              value={{
                size: "25px",
                className: "component-card-heart-outline",
              }}
            >
              <FaRegHeart />
            </IconContext.Provider>
          )}
          <div className="component-card-like-count">{likes}</div>
        </div>

        <div className="component-card-save-container" onClick={saveHandler}>
          {saved ? (
            <IconContext.Provider
              value={{ size: "25px", className: "component-card-saved" }}
            >
              <FaSave />
            </IconContext.Provider>
          ) : (
            <IconContext.Provider
              value={{ size: "25px", className: "component-card-save" }}
            >
              <FaSave />
            </IconContext.Provider>
          )}

          <div className="component-card-save-count">{saves}</div>
        </div>
        <Link
          to={`/components/${componentId}`}
          style={{ textDecoration: "none" }}
        >
          <div className="component-card-comment-container">
            <IconContext.Provider
              value={{ size: "23px", className: "component-card-comment" }}
            >
              <FaCommentAlt />
            </IconContext.Provider>
            <div className="component-card-comment-count">{comments}</div>
          </div>
        </Link>
      </div>
      <div className="component-card-type-container">
        <div className="component-card-types">{type}</div>
        <div className="component-card-types">{markup}</div>
        <div className="component-card-types">{styling}</div>
      </div>
    </div>
  );
}
export default ComponentCard;
