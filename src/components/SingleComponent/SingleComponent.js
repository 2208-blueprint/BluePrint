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
import {useParams, useNavigate} from 'react-router-dom'
import anime from "animejs/lib/anime.es.js"
import CommentsSection from "./CommentsSection";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaHeart, FaCommentAlt, FaSave, FaRegHeart } from "react-icons/fa";
import { BsPersonPlusFill, BsPersonCheckFill, BsPencilFill, BsTrashFill} from 'react-icons/bs'
import { GoPencil } from 'react-icons/go'
import { IconContext } from "react-icons";

function SingleComponent({width}) {

  // these states hold the actual component code
  const [html, setHTML] = useState("");
  const [css, setCSS] = useState("");
  const [js, setJS] = useState("");
  const [less, setLess] = useState("");
  const [sass, setSass] = useState("");
  // this state holds the code that goes into the iFrame
  const [srcDoc, setSrcDoc] = useState("");
  // this state changes what code editor is shown (based on what tab is clicked)
  const [view, setView] = useState("html");
  // this is for the color picker
  const [color, setColor] = useState('')
  // this is for the title of component
  const [title, setTitle] = useState('title of component')
  const [temp, setTemp] = useState({
    framework: null,
    stylingFramework: null
  })
  // these help determine whether or not you like and saved, or followed, favorite, etc.
  const [liked, setLiked] = useState(false)
  const [saved, setSaved] = useState(false)
  const [followed, setFollowed] = useState(false)
  const [author, setAuthor] = useState({username: '', id:0})
  const [loggin, setLoggin] = useState(false)
  const [amCreator, setAmCreator] = useState(false)

  const params = useParams()
  const navigate = useNavigate()
  const toastSuccess = (msg) => toast.dark(msg, { autoClose: 2000});
  const toastPopup = (msg) => toast.dark(msg, { autoClose: 2000});


  // changes in the code editor change these
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

  // copy to clipboard, NEEDS HTTPS url
  function copyClipboard() {
    switch (view) {
      case 'html':
        navigator.clipboard.writeText(html).then(()=>toastSuccess('Copied to clipboard!'))
        break;
      case 'css':
        navigator.clipboard.writeText(css).then(()=>toastSuccess('Copied to clipboard!'))
        break;
      case 'js':
        navigator.clipboard.writeText(js).then(()=>toastSuccess('Copied to clipboard!'))
        break;
      case 'less':
        navigator.clipboard.writeText(less).then(()=>toastSuccess('Copied to clipboard!'))
        break;
      default:
        break;
    }
  }

  // like handler
  async function likeHandler(e) {
    try {
      e.preventDefault();
      // ONLY if you are logged in
      if (window.localStorage.token) {
        // if you did not like it already
        if (!liked) {
          await axios.post(`/api/components/${params.id}/favorite`, {}, {
            headers: {
              authorization: window.localStorage.getItem('token')
            }
          });
          // this makes the little grow animation when you click it
          anime({
            targets: '#singlecomp-heart',
            scale: [4,1],
            duration: 200,
            easing: 'easeOutCubic'
          })
          toastPopup("?????? Liked!")
        } else {
          await axios.delete(`/api/components/${params.id}/remove-favorite`, {
            headers: {
              authorization: window.localStorage.getItem('token')
            }
          });
          toastPopup("???? Unliked!")
        }
        setLiked(!liked);
      }
    } catch (err) {
      console.log(err);
    }
  }


  // save handler, see logic from like handler
  async function saveHandler(e) {
    try {
      e.preventDefault();
      if (window.localStorage.token) {
        if (!saved) {
          await axios.post(`/api/components/${params.id}/save`, {}, {
            headers: {
              authorization: window.localStorage.getItem('token')
            }
          });
          anime({
            targets: '#singlecomp-save',
            scale: [4,1],
            duration: 200,
            easing: 'easeOutCubic'
          })
          toastPopup("???? Saved to your profile!");
        } else {
          await axios.delete(`/api/components/${params.id}/remove-save`, {
            headers: {
              authorization: window.localStorage.getItem('token')
            }
          });
          toastPopup("???? Removed from your profile!");
        }
        setSaved(!saved);
      }
    } catch (err) {
      console.log(err);
    }
  }

  // follow handler, see logic from like handler
  async function followHandler(e) {
    try {
      e.preventDefault();
      if (window.localStorage.token) {
        if (!followed) {
          await axios.put(`/api/users/follow/${author.id}`,{},{
            headers: {
              authorization: window.localStorage.getItem('token')
            }
          });
          toastPopup(`Now following ${author.username}`)
        } else {
          await axios.put(`/api/users/unfollow/${author.id}`,{},{
            headers: {
              authorization: window.localStorage.getItem('token')
            }
          });
          toastPopup(`Unfollowed ${author.username}`)
        }
        setFollowed(!followed)
      }
    } catch (err) {
      console.log(err)
    }
  }

  // if any of the code changes, then re-define the source for the iframe
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
    window.scrollTo(0,0)
    async function getComp() {
      // get the component, with the code
      const {data} = await axios.get(`/api/components/${params.id}`)
      // variables we'll store for now, will help later
      let currentUser
      let currentFollowers
      let currentAuthor

      // if you are logged in, get this information so you can see if you already liked, favorited, etc.
      if (window.localStorage.getItem('token')) {
        const profile = await axios.get(`/api/users/profile`, {
          headers: {
            authorization: window.localStorage.getItem('token')
          }
        });
        const followers = await axios.get('/api/users/following', {
          headers: {
            authorization: window.localStorage.getItem('token')
          }
        })
        currentUser = profile.data
        currentFollowers = followers.data
      }

      // sets the information from the component
      if (data.framework === 'html') {
        setHTML(data.markup)
        setJS(data.js)
      } else {
        setJS(data.markup)
      }
      if (data.stylingFramework === 'css') {
        setCSS(data.stylesheet)
      } else {
        setLess(data.stylesheet)
      }
      setTitle(data.name)
      setTemp(data)
      setView(data.framework === 'html' ? 'html' : 'js')

      // find the author of the component
      for (let i = 0; i < data.users.length; i++) {
        if (data.users[i].user_component.isAuthor) {
          setAuthor(data.users[i])
          currentAuthor = data.users[i]
        }
      }
      // if you are logged in, all the logic to see if you liked, saved, created, followed, etc.
      if (window.localStorage.getItem('token')) {
        const componentLikes = data.users.filter(
          (user) => user["user_component"].isFavorite
        );
        const componentSaves = data.users.filter(
          (user) => user["user_component"].isSaved
        );
        if (componentSaves.find((user) => user.id === currentUser.id)) {
          setSaved(true);
        }
        if (componentLikes.find((user) => user.id === currentUser.id)) {
          setLiked(true);
        }
        if (currentFollowers.find((user) => user.id === currentAuthor.id)) {
          setFollowed(true)
        }
        if (currentAuthor.id === currentUser.id) {
          setAmCreator(true)
        }
      }
    }
    getComp()
    if (window.localStorage.getItem('token')) {
      setLoggin(true)
    }
  }, []);

  // delete handler
  async function deleteHandler() {
    const confirmation = confirm('Are you sure to delete this component?') ; 
    if (confirmation) {
      await axios.delete(`/api/components/${params.id}`, {
        headers: {
          authorization: window.localStorage.getItem('token')
        }
      })
      navigate('/')
    }
  }

  // compile the less into css if less changes
  React.useEffect(()=> {
    Less.render(less).then(function(output) {
      setCSS(output.css)
    })
  }, [less])

  return (
    <div id="singlecomp-root">
      <div id="singlecomp-top">
      <a href="/" className="singlecomp-back">
        <div className="fa fa-chevron-left"><span>&nbsp;Back</span></div>
      </a>
      <div className='singlecomp-title-author'>
        <span>{title} by </span><span onClick={author.username ? ()=>navigate(`/users/${author.id}`) : ()=>navigate('/')} className="singlecomp-author"> {author.username ? author.username : 'BluePrint Community'}</span>
        {/* ONLY show the follow symbol if you are logged in and NOT the creator of the component */}
        {(loggin && !amCreator && author.username) ? 
         (followed ? <div onClick={followHandler} id ="singlecomp-follow">
          <IconContext.Provider value={{size: "40px"}}>
            <BsPersonCheckFill/>
          </IconContext.Provider>
          <span className="singlecomp-tooltip">Unfollow User</span>
        </div> : <div onClick={followHandler} id="singlecomp-follow">
          <IconContext.Provider value={{size: "40px"}}>
            <BsPersonPlusFill/>
          </IconContext.Provider>
          <span className="singlecomp-tooltip">Follow User</span>
        </div>) : <div></div>}
      </div>
      {/* ONLY show the like symbol if you are logged in and NOT the creator of the component */}
      {loggin ? amCreator ? 
      <div id="singlecomp-heart" onClick={()=>navigate(`/components/${params.id}/edit`)}>
        <IconContext.Provider value={{size: '40px'}}>
          <GoPencil/>
        </IconContext.Provider>
      </div>
      : <div id="singlecomp-heart" onClick={likeHandler} value={params.id}>
        {liked ?
        <span className='singlecomp-hearted' value={params.id}><IconContext.Provider
                    value={{ size: "40px"}}
                  >
                    <FaHeart/>
                  </IconContext.Provider></span>
                  :<span value={params.id}><IconContext.Provider
                  value={{ size: "40px"}}
                >
                  <FaRegHeart/>
                </IconContext.Provider></span>}
        </div>
      : <div></div>}
      {/* ONLY show the save symbol if you are logged in and NOT the creator of the component */}
      {loggin ? amCreator ? 
      <div id="singlecomp-save" onClick={deleteHandler}> 
        <IconContext.Provider value={{size: '40px'}}>
          <BsTrashFill/>
        </IconContext.Provider>
      </div>
      : <div id="singlecomp-save" onClick={saveHandler} value={params.id}>
        {saved ? <span className='singlecomp-saved' value={params.id}><IconContext.Provider
                    value={{ size: "40px"}}
                  >
                    <FaSave/>
                  </IconContext.Provider></span>
                  :<span value={params.id}><IconContext.Provider
                  value={{ size: "40px"}}
                >
                  <FaSave/>
                </IconContext.Provider></span>}
        </div>
      : <div></div>}
      </div>
      {/* this is the iFrame that previews the code */}
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
        {/* Changing tabs changes the view */}
      <div id="singlecomp-buttons-box">
        <button
          onClick={() => setView("html")}
          className={(view === "html" ? "singlecomp-pressed" : "") + (temp.framework === 'html' ? '' : ' singlecomp-hidden')}
        >
          HTML
        </button>
        <button
          onClick={() => setView("css")}
          className={(view === "css" ? "singlecomp-pressed" : "") + (temp.stylingFramework === 'css' ? '' : ' singlecomp-hidden')}
        >
          CSS
        </button>
        <button
          onClick={() => setView("js")}
          className={(view === "js" ? "singlecomp-pressed" : "")}
        >
          JS
        </button>
        <button
          onClick={() => setView("less")}
          className={(view === "less" ? "singlecomp-pressed" : "") + (temp.stylingFramework === 'less' ? '' : ' singlecomp-hidden') }
        >
          Less
        </button>
        <button
          onClick={() => setView("sass")}
          className={(view === "sass" ? "singlecomp-pressed" : "") + (temp.stylingFramework === 'sass' ? '' : ' singlecomp-hidden')}
        >
          Sass
        </button>
      </div>
        <div className="singlecomp-color-picker-cont">Color: &nbsp;
          <input className="singlecomp-color-picker" type="color"></input>
        </div>
        <div className="singlecomp-clipboard" onClick={copyClipboard}>
            <img src="/copy.png"></img>
        </div>
      </div>
      {/* Divs that hold the edtiors, they are ONLY shown if the correct view is selected */}
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
            fontSize={width > 1300 ? '1.5rem' : '1rem'}
            wrapEnabled={true}
            height="700px"
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
            fontSize={width > 1300 ? '1.5rem' : '1rem'}
            wrapEnabled={true}
            height="700px"
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
            fontSize={width > 1300 ? '1.5rem' : '1rem'}
            wrapEnabled={true}
            height="700px"
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
            fontSize={width > 1300 ? '1.5rem' : '1rem'}
            placeholder="/* Less Goes Here */"
            wrapEnabled={true}
            height="700px"
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
            fontSize={width > 1300 ? '1.5rem' : '1rem'}
            placeholder="/* Sass Goes Here */"
            wrapEnabled={true}
            height="700px"
          />
        </div>
        <div id ="singlecomp-userinfo">
            <h1>{title}</h1>
            <h1>By {author.username ? author.username : 'BluePrint Community'}</h1>
            <a href={author.username ? `/users/${author.id}` : '/'}>See more from {author.username ? author.username : 'BluePrint Community'}</a>
        </div>
        <div id="singlecomp-color-picker">
          <h1>Color Selector Tool</h1>
          <input onChange={(event)=>setColor(event.target.value)} type="color"></input>
          <h2>Selected: {color}</h2>
        </div>
        <CommentsSection loggin={loggin}/>
      </div>
    </div>
  );
}

export default SingleComponent;