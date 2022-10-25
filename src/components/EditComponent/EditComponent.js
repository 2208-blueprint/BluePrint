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
import {useNavigate, useParams} from 'react-router-dom'
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function EditComponent({width}) {
  const [html, setHTML] = useState("");
  const [css, setCSS] = useState("");
  const [js, setJS] = useState("");
  const [less, setLess] = useState("");
  const [sass, setSass] = useState("");
  const [srcDoc, setSrcDoc] = useState("");
  const [view, setView] = useState("html");
  const [color, setColor] = useState('')

  const navigate = useNavigate()
  const params = useParams()

  const toastPopup = (msg) => {
    toast.dark(msg);
  };

  // form section
  const [form, setForm] = useState('html')
  const [form2, setForm2] = useState('css')
  const [name, setName] = useState('')
  const [type, setType] = useState('animation')
  const [desc, setDesc] = useState('')
  const [tags, setTags] = useState([])
  const [singleTag, setSingleTag] = useState('')

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
    // Less.render(newValue).then(function(output) {
    //   setCSS(output.css)
    // })
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

  async function submitComponent() {
    let markup
    let stylesheet
    if (form === 'html') {
        markup = html
    } else {
        markup = js
    }
    if (form2 === 'css') {
        stylesheet = css
    } else {
        stylesheet = less
    }
    const {data} = await axios.put(`/api/components/${params.id}`, {
        name: name,
        description: desc,
        type: type,
        framework: form,
        stylingFramework: form2,
        markup: markup,
        stylesheet: stylesheet,
        tags: tags,
        js: js
    }, {
      headers: {
        authorization: window.localStorage.getItem('token')
      }
    })
    toastPopup('Component Modifed!')
    navigate(`/components/${data.id}`)
  }

  function addTag() {
    setTags([...tags, singleTag])
    setSingleTag('')
  }

  function removeTag(tagName) {
    const tagList = tags
    setTags(tagList.filter((tag) => {
      if (tag === tagName) {
        return false
      } else {
        return true
      }
    }))
  }

    // compile the less into css if less changes
    React.useEffect(()=> {
      Less.render(less).then(function(output) {
        setCSS(output.css)
      })
    }, [less])

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
    window.scrollTo(0,0)
    async function getComp() {
      // get the component, with the code
      const {data} = await axios.get(`/api/components/${params.id}`)
      // if the user is not logged in, kick them out
      let profile
      if (window.localStorage.getItem('token')) {
         profile = await axios.get('/api/users/profile', {
          headers: {
            authorization: window.localStorage.getItem('token')
          }
        })
      } else {
        navigate(`/components/${params.id}`)
      }
      // if the logged in user is not the owner of the component, send them
      // to the base component page.
      let pass = false
      for (let i = 0; i < data.users.length; i++) {
        if (data.users[i].user_component.isAuthor) {
          pass = true
        }
      }
      if (!pass) {
        navigate(`/components/${params.id}`)
      }
      // Now actually set the data
      if (data.framework === 'html') {
        setForm('html')
        setHTML(data.markup)
        setJS(data.js)
        setView('html')
      } else {
        setForm('react')
        setJS(data.markup)
        setView('js')
      }
      if (data.stylingFramework === 'css') {
        setForm2('css')
        setCSS(data.stylesheet)
      } else {
        setForm2('less')
        setLess(data.stylesheet)
      }
      setName(data.name)
      setType(data.type)
      setTags(data.tags.split(';'))
      setDesc(data.description)
    }
    getComp()
    
  }, []);

  console.log(form)

  return (
    <div id="createcomp-root">
      <a href={'/components' + `/${params.id}`} className="createcomp-back">
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
          className={(view === "html" ? " createcomp-pressed" : "") + (form === 'html' ? '': ' createcomp-hidden')}
        >
          HTML
        </button>
        <button
          onClick={() => setView("js")}
          className={(view === "js" ? " createcomp-pressed" : "")}
        >
          JS
        </button>
        <button
          onClick={() => setView("css")}
          className={(view === "css" ? " createcomp-pressed" : "") + (form2 === 'css' ? '':' createcomp-hidden')}
        >
          CSS
        </button>
        <button
          onClick={() => setView("less")}
          className={(view === "less" ? " createcomp-pressed" : "") + (form2 === 'less' ? '':' createcomp-hidden')}
        >
          Less
        </button>
        <button
          onClick={() => setView("sass")}
          className={(view === "sass" ? " createcomp-pressed" : "") + (form2 === 'sass' ? '':' createcomp-hidden')}
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
            fontSize={width > 1300 ? '1.5rem' : '1rem'}
            wrapEnabled={true}
            height="800px"
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
            fontSize={width > 1300 ? '1.5rem' : '1rem'}
            wrapEnabled={true}
            height="800px"
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
            fontSize={width > 1300 ? '1.5rem' : '1rem'}
            wrapEnabled={true}
            height="800px"
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
            fontSize={width > 1300 ? '1.5rem' : '1rem'}
            placeholder="/* Less Goes Here */"
            wrapEnabled={true}
            height="800px"
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
            fontSize={width > 1300 ? '1.5rem' : '1rem'}
            placeholder="/* Sass Goes Here */"
            wrapEnabled={true}
            height="800px"
          />
        </div>
        <div id ="createcomp-submission">
            <h1>Edit Your Component!</h1>
            <div>Markup:&nbsp;&nbsp;
            <select value={form} onChange={(event)=>{
              setForm(event.target.value)
              setView(event.target.value === 'html' ? 'html' : 'js')
              }}>
                <option value="html">HTML</option>
                <option value="react">React</option>
            </select>
            </div>
            <div>Stylesheet:&nbsp;&nbsp;
            <select value={form2} onChange={(event)=>{
              setForm2(event.target.value)
              setView(form === 'html' ? 'html' : 'js')
              }}>
                <option value="css">CSS</option>
                <option value="less">Less</option>
            </select>
            </div>
            <div>Name:&nbsp;&nbsp;
                <input value={name} onChange={(event)=>setName(event.target.value)}></input>
            </div>
            <div>Type:&nbsp;&nbsp;
                <select value={type} onChange={(event)=>setType(event.target.value)}>
                  <option value="animation">animation</option>
                  <option value="button">button</option>
                  <option value="drop-down">drop-down</option>
                  <option value="footer">footer</option>
                  <option value="form">form</option>
                  <option value="graphic">graphic</option>
                  <option value="icon">icon</option>
                  <option value="info-card">info-card</option>
                  <option value="mobile">mobile</option>
                  <option value="navbar">navbar</option>
                  <option value="slider">slider</option>
                  <option value="misc">misc</option>
                </select>
            </div>
            <h2>Description:</h2>
            <div>
                <textarea value={desc} onChange={(event)=>setDesc(event.target.value)} className="createcomp-desc"></textarea>
            </div>
            <div>Tags:&nbsp;&nbsp;
                <input placeholder="one word tag" value={singleTag} onChange={(event) => setSingleTag(event.target.value)}></input><button onClick={addTag} className="createcomp-tag-button">Add Tag</button>
            </div>
            <div className="createcomp-tags-container">
              {tags?.map((tag, i) =>
                <div className="createcomp-tag" key={i}>
                  <span>{tag}</span>&nbsp;&nbsp;<span onClick={()=>removeTag(tag)} className="createcomp-x">X</span>
                </div>
              )}
            </div>
            <button onClick={submitComponent}>Edit</button>
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

export default EditComponent;