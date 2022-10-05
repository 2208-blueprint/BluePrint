import React, { useState, useEffect } from "react";
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/mode-xml";
import "ace-builds/src-noconflict/mode-css";
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/theme-github";
import "ace-builds/src-noconflict/theme-monokai";

function SingleComponent() {
  const [html, setHTML] = useState("");
  const [css, setCSS] = useState("");
  const [js, setJS] = useState("");
  const [srcDoc, setSrcDoc] = useState("");

  function onChangeHTML(newValue) {
    let output = document.getElementById("output");
    setHTML(newValue);
  }

  function onChangeCSS(newValue) {
    let output = document.getElementById("output");
    let str = "<style>" + newValue + "</style>";
    setCSS(newValue);
  }

  function onChangeJS(newValue) {
    let output = document.getElementById("output");
    setJS(newValue);
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

  console.log(srcDoc);
  return (
    <div id="singlecomp-root">
      <h1>PREVIEW</h1>
      <div id="singlecomp-iframe">
        <iframe
          srcDoc={srcDoc}
          title="output"
          sandbox="allow-scripts"
          width="100%"
          height="100%"
        />
      </div>
      <div id="singlecomp-editors">
        <div id="singlecomp-html-editor">
          <p>HTML Editor</p>
          <AceEditor
            mode="xml"
            theme="monokai"
            onChange={onChangeHTML}
            value={html}
            name="HTML"
            editorProps={{ $blockScrolling: true }}
            placeholder='<!-- HTML goes here -->'
            width="100%"
            fontSize="1.5rem"
          />
        </div>
        <div id="singlecomp-css-editor">
          <p>CSS Editor</p>
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
        <div id="singlecomp-javascript-editor">
          <p>JS Editor</p>
          <AceEditor
            mode="javascript"
            theme="monokai"
            onChange={onChangeJS}
            value={js}
            name="JS"
            editorProps={{ $blockScrolling: true }}
            placeholder='//Javascript goes here'
            width="100%"
            fontSize="1.5rem"
          />
        </div>
      </div>
    </div>
  );
}

export default SingleComponent;
