import React, { useState, useEffect } from "react";
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/mode-xml";
import "ace-builds/src-noconflict/mode-css";
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/mode-less";
import "ace-builds/src-noconflict/mode-scss";
import "ace-builds/src-noconflict/theme-github";
import "ace-builds/src-noconflict/theme-monokai";
import Less from "less";
import axios from "axios";
import {useParams} from 'react-router-dom'

function SingleComponent() {
  const [html, setHTML] = useState("");
  const [css, setCSS] = useState("");
  const [js, setJS] = useState("");
  const [less, setLess] = useState("");
  const [sass, setSass] = useState("");
  const [srcDoc, setSrcDoc] = useState("");
  const [view, setView] = useState("html");
  const [color, setColor] = useState('')
  const [title, setTitle] = useState('title of component')

  const params = useParams()

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

  function onChangeSass(newValue) {
    setSass(newValue);
  }

  function copyClipboard() {
    switch (view) {
      case 'html':
        navigator.clipboard.writeText(html).then(()=>alert('Copied to clipboard!'))
        break;
      case 'css':
        navigator.clipboard.writeText(css).then(()=>alert('Copied to clipboard!'))
        break;
      case 'js':
        navigator.clipboard.writeText(js).then(()=>alert('Copied to clipboard!'))
        break;
      case 'less':
        navigator.clipboard.writeText(less).then(()=>alert('Copied to clipboard!'))
        break;
      default:
        break;
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

  React.useEffect(() => {
    async function getComp() {
      const {data} = await axios.get(`/api/components/${params.id}`)
      console.log(data)
      if (data.framework === 'html') {
        setHTML(data.markup)
      } else {
        setJS(data.markup)
      }
      if (data.stylingFramework === 'css') {
        setCSS(data.stylesheet)
      } else {
        setLess(data.stylesheet)
      }
      setTitle(data.name)
    }
    getComp()
  }, []);

  return (
    <div id="singlecomp-root">
      <a href="/" className="singlecomp-back">
        <div className="fa fa-chevron-left"><span>&nbsp;Back</span></div>
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
      <div id="singlecomp-buttons">
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
        <button
          onClick={() => setView("sass")}
          className={view === "sass" ? " singlecomp-pressed" : ""}
        >
          Sass
        </button>
      </div>
        <div className="singlecomp-clipboard" onClick={copyClipboard}>
            <img src="/copy.png"></img>
        </div>
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
            wrapEnabled={true}
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
            wrapEnabled={true}
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
            placeholder="// Javascript goes here"
            width="100%"
            fontSize="1.5rem"
            wrapEnabled={true}
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
            placeholder="/* Less Goes Here */"
            wrapEnabled={true}
          />
        </div>
        <div
          id="singlecomp-sass-editor"
          className={view === "sass" ? "" : "singlecomp-hidden"}
        >
          <AceEditor
            mode="less"
            theme="monokai"
            onChange={onChangeSass}
            value={sass}
            name="Sass"
            editorProps={{ $blockScrolling: true }}
            width="100%"
            fontSize="1.5rem"
            placeholder="/* Sass Goes Here */"
            wrapEnabled={true}
          />
        </div>
        <div id ="singlecomp-userinfo">
            <h1>{title}</h1>
            <h1>By User</h1>
            <a href='/users/1'>See more from user</a>
        </div>
        <div id="singlecomp-color-picker">
          <h1>Color Selector Tool</h1>
          <input onChange={(event)=>setColor(event.target.value)} type="color"></input>
          <h2>Selected: {color}</h2>
        </div>
      </div>
    </div>
  );
}

export default SingleComponent;



