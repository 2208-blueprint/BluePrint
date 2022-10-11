import React, { useState } from "react";
import axios from "axios";
import Less from "less";
import { Link } from "react-router-dom";
import anime from "animejs/lib/anime.es.js";
import { FaHeart, FaCommentAlt, FaSave, FaRegHeart } from "react-icons/fa";
import { IconContext } from "react-icons";

function ComponentCard({ componentId }) {
  const [html, setHTML] = useState("");
  const [css, setCSS] = useState("");
  const [less, setLess] = useState("");
  const [js, setJS] = useState("");
  const [srcDoc, setSrcDoc] = useState("");
  const [title, setTitle] = useState("title of component");
  const [liked, setLiked] = useState(false);
  const [likes, setLikes] = useState(0);
  const [author, setAuthor] = useState("");

  function likeHandler(e) {
    e.preventDefault();
    if (!liked) {
      setLikes(likes + 1);
    } else {
      setLikes(likes - 1);
    }
    setLiked(!liked);
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
      const componentAuthor = data.users.find(
        (user) => user["user_component"].isAuthor
      );
      const componentLikes = data.users.filter(
        (user) => !user["user_component"].isAuthor
      );
      setLikes(componentLikes.length);
      console.log(author);
      if (componentAuthor?.username) {
        setAuthor(componentAuthor?.username);
      } else {
        setAuthor(`BluePrint Community`);
      }
      console.log(author);
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
    <Link to={`/components/${componentId}`}>
      <div className="component-card-main">
        <div className="component-card-thumbnail">
          <div className="component-card-cover">
            {" "}
            <div className="component-card-info">
              {title} by {author}
            </div>
          </div>
          <div className="component-card-icons">
            <div
              className="component-card-heart-container"
              onClick={likeHandler}
            >
              {liked ? (
                <IconContext.Provider
                  value={{ size: "40px", className: "component-card-heart" }}
                >
                  <FaHeart />
                </IconContext.Provider>
              ) : (
                <IconContext.Provider
                  value={{ size: "40px", className: "component-card-heart" }}
                >
                  <FaRegHeart />
                </IconContext.Provider>
              )}
              <div className="component-card-like-count">{likes}</div>
            </div>
            <div
              className="component-card-comment-container"
              onClick={likeHandler}
            >
              <IconContext.Provider
                value={{ size: "38px", className: "component-card-comment" }}
              >
                <FaCommentAlt />
              </IconContext.Provider>
              <div className="component-card-comment-count">{likes}</div>
            </div>
            <div
              className="component-card-save-container"
              onClick={likeHandler}
            >
              <IconContext.Provider
                value={{ size: "40px", className: "component-card-save" }}
              >
                <FaSave />
              </IconContext.Provider>
              <div className="component-card-save-count">{likes}</div>
            </div>
          </div>
          <iframe
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
  );
}
export default ComponentCard;
