import React, { useState, useEffect } from "react";
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/mode-xml";
import "ace-builds/src-noconflict/mode-css";
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/mode-less";
import "ace-builds/src-noconflict/mode-sass";
import "ace-builds/src-noconflict/theme-github";
import "ace-builds/src-noconflict/theme-monokai";
import Less from "less";

function SingleComponent() {
  const [html, setHTML] = useState("");
  const [css, setCSS] = useState("");
  const [js, setJS] = useState("");
  const [less, setLess] = useState("");
  const [srcDoc, setSrcDoc] = useState("");
  const [view, setView] = useState("html");

  function onChangeHTML(newValue) {
    setHTML(newValue);
  }

  function onChangeCSS(newValue) {
    setCSS(newValue);
  }

  function onChangeJS(newValue) {
    setJS(newValue);
  }

  function onChangeLess(newValue) {
    setLess(newValue)
    Less.render(newValue).then(function(output) {
      setCSS(output.css)
    })
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

  React.useEffect(() => {
    setHTML("<!-- HTML Goes Here -->");
    setCSS(`/* CSS Goes Here */`);
    setJS(`// Javascript Goes Here`);
  }, []);

  return (
    <div id="singlecomp-root">
      <a href="/" className="singlecomp-back fa fa-chevron-left">
        {" "}
        Back
      </a>
      <div id="singlecomp-iframe">
        <iframe
          srcDoc={srcDoc}
          title="output"
          sandbox="allow-scripts"
          width="100%"
          height="100%"
        />
      </div>
      <div id="singlecomp-buttons-box">
        <button
          onClick={() => setView("html")}
          className={view === "html" ? " singlecomp-pressed" : ""}
        >
          HTML
        </button>
        <button
          onClick={() => setView("css")}
          className={view === "css" ? " singlecomp-pressed" : ""}
        >
          CSS
        </button>
        <button
          onClick={() => setView("js")}
          className={view === "js" ? " singlecomp-pressed" : ""}
        >
          JS
        </button>
        <button
          onClick={() => setView("less")}
          className={view === "less" ? " singlecomp-pressed" : ""}
        >
          Less
        </button>
      </div>
      <div id="singlecomp-editors">
        <div
          id="singlecomp-html-editor"
          className={view === "html" ? "" : "singlecomp-hidden"}
        >
          <AceEditor
            mode="xml"
            theme="monokai"
            onChange={onChangeHTML}
            value={html}
            name="HTML"
            editorProps={{ $blockScrolling: true }}
            placeholder="<!-- HTML goes here -->"
            width="100%"
            fontSize="1.5rem"
          />
        </div>
        <div
          id="singlecomp-css-editor"
          className={view === "css" ? "" : "singlecomp-hidden"}
        >
          <AceEditor
            mode="css"
            theme="monokai"
            onChange={onChangeCSS}
            value={css}
            name="CSS"
            editorProps={{ $blockScrolling: true }}
            placeholder="/* CSS Goes Here */"
            width="100%"
            fontSize="1.5rem"
          />
        </div>
        <div
          id="singlecomp-javascript-editor"
          className={view === "js" ? "" : "singlecomp-hidden"}
        >
          <AceEditor
            mode="javascript"
            theme="monokai"
            onChange={onChangeJS}
            value={js}
            name="JS"
            editorProps={{ $blockScrolling: true }}
            placeholder="//Javascript goes here"
            width="100%"
            fontSize="1.5rem"
          />
        </div>
        <div
          id="singlecomp-less-editor"
          className={view === "less" ? "" : "singlecomp-hidden"}
        >
          <AceEditor
            mode="less"
            theme="monokai"
            onChange={onChangeLess}
            value={less}
            name="Less"
            editorProps={{ $blockScrolling: true }}
            width="100%"
            fontSize="1.5rem"
          />
        </div>
      </div>
    </div>
  );
}

export default SingleComponent;



