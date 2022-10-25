import React, { useState } from "react";
import Less from "less";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function ComponentCardProfile({ component }) {
  const [html, setHTML] = useState("");
  const [css, setCSS] = useState("");
  const [less, setLess] = useState("");
  const [js, setJS] = useState("");
  const [srcDoc, setSrcDoc] = useState("");
  const [title, setTitle] = useState("title of component");

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
      if (component?.framework === "html") {
        setHTML(component?.markup);
      } else {
        setJS(component?.markup);
      }
      if (component?.stylingFramework === "css") {
        setCSS(component?.stylesheet);
      } else {
        setLess(component?.stylesheet);
      }
      setTitle(component?.name);
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
    <Link to={`/components/${component.id}`} style={{ textDecoration: "none" }}>
      <div className="profile-component-card-main">
        <div className="profile-component-card-thumbnail">
          <div className="profile-component-card-cover">
            {" "}
            <div className="profile-component-card-info">{title}</div>
          </div>

          <iframe
            key={component.id}
            srcDoc={srcDoc}
            title="output"
            sandbox="allow-scripts"
            width="422px"
            height="422px"
            scrolling="no"
            frameBorder="0"
          />
        </div>
      </div>
    </Link>
  );
}
export default ComponentCardProfile;
