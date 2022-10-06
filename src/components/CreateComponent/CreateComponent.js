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

function CreateComponent() {
  const [html, setHTML] = useState("");
  const [css, setCSS] = useState("");
  const [js, setJS] = useState("");
  const [less, setLess] = useState("");
  const [sass, setSass] = useState("");
  const [srcDoc, setSrcDoc] = useState("");
  const [view, setView] = useState("html");
  const [color, setColor] = useState('')
  const [form, setForm] = useState(['html', 'css'])

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

  function submitComponent() {
    let markup
    let stylesheet
    if (form[0] === 'html') {
        markup = html
    } else {
        markup = js
    }
    if (form[1] === 'css') {
        stylesheet = css
    } else {
        stylesheet = less
    }
    console.log(markup, stylesheet)
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


  return (
    <div id="createcomp-root">
      <a href="/" className="createcomp-back">
        <div className="fa fa-chevron-left"><span>&nbsp;Back</span></div>
      </a>
      <div id="createcomp-iframe">
        <iframe
          srcDoc={srcDoc}
          title="output"
          sandbox="allow-scripts"
          width="100%"
          height="100%"
        />
      </div>
      <div id="createcomp-buttons">
      <div id="createcomp-buttons-box">
        <button
          onClick={() => setView("html")}
          className={view === "html" ? " createcomp-pressed" : ""}
        >
          HTML
        </button>
        <button
          onClick={() => setView("css")}
          className={view === "css" ? " createcomp-pressed" : ""}
        >
          CSS
        </button>
        <button
          onClick={() => setView("js")}
          className={view === "js" ? " createcomp-pressed" : ""}
        >
          JS
        </button>
        <button
          onClick={() => setView("less")}
          className={view === "less" ? " createcomp-pressed" : ""}
        >
          Less
        </button>
        <button
          onClick={() => setView("sass")}
          className={view === "sass" ? " createcomp-pressed" : ""}
        >
          Sass
        </button>
      </div>
        <div className="createcomp-clipboard" onClick={copyClipboard}>
            <img src="/copy.png"></img>
        </div>
      </div>
      <div id="createcomp-editors">
        <div
          id="createcomp-html-editor"
          className={view === "html" ? "" : "createcomp-hidden"}
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
          id="createcomp-css-editor"
          className={view === "css" ? "" : "createcomp-hidden"}
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
          id="createcomp-javascript-editor"
          className={view === "js" ? "" : "createcomp-hidden"}
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
          id="createcomp-less-editor"
          className={view === "less" ? "" : "createcomp-hidden"}
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
          id="createcomp-sass-editor"
          className={view === "sass" ? "" : "createcomp-hidden"}
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
        <div id ="createcomp-submission">
            <h1>Submit Your Creation!</h1>
            <div>Markup:
            <select onChange={(event)=>setForm([event.target.value, form[1]])}>
                <option value="html">HTML</option>
                <option value="react">React</option>
            </select>
            </div>
            <div>Stylesheet:
            <select onChange={(event)=>setForm([form[0],event.target.value])}>
                <option value="css">CSS</option>
                <option value="less">Less</option>
            </select>
            </div>
            <button onClick={submitComponent}>Submit</button>
        </div>
        <div id="createcomp-color-picker">
          <h1>Color Selector Tool</h1>
          <input onChange={(event)=>setColor(event.target.value)} type="color"></input>
          <h2>Selected: {color}</h2>
        </div>
      </div>
    </div>
  );
}

export default CreateComponent;