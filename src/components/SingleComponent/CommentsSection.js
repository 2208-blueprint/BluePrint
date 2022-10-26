import React from "react";
import anime from "animejs/lib/anime.es.js"
import axios from "axios";
import {useParams} from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux";
import { getSingleUser } from "../../store/users/singleUserSlice";
import { FaHeart, FaCommentAlt, FaSave, FaRegHeart } from "react-icons/fa";
import { IconContext } from "react-icons";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CommentsSection = (props) => {

    // state that holds the comments
    const [comment, setComment] = React.useState('')
    const [comments, setComments] = React.useState([])
    const [temp, setTemp] = React.useState(false)

    const user = useSelector(state => state.singleUser)
    const toastPopup = (msg) => toast.dark(msg, { autoClose: 2000});

    const params = useParams()
    const dispatch = useDispatch()

    // submit comment, and then RE GET the comments and set that so it "live updates"
    const submitComment = async() => {
        await axios.put(`api/comments/component/${params.id}/addcomment`, {
            message: comment
        }, {
            headers: {
                authorization: window.localStorage.getItem('token')
            }
        })
        setComment('')
        const {data} = await axios.get(`/api/comments/component/${params.id}`)
        setComments(data)
        toastPopup('✏️ Comment posted!')
        dispatch(getSingleUser())

    }

    // like handler
    const likeHandler = async(event) => {
        event.preventDefault()
        await axios.post(`api/comments/${event.currentTarget.getAttribute('value')}/like`, {
        }, {
            headers: {
                authorization: window.localStorage.getItem('token')
            }
        })
        toastPopup('❤️ Comment liked!')
        const {data} = await axios.get(`/api/comments/component/${params.id}`)
        dispatch(getSingleUser())
        setComments(data)
    }

    // unlike handler
    const unlikeHandler = async(event) => {
        event.preventDefault()
        await axios.delete(`api/comments/${event.currentTarget.getAttribute('value')}/unlike`,{
            headers: {
                authorization: window.localStorage.getItem('token')
            }
        })
        toastPopup("💔 Comment unliked!")
        const {data} = await axios.get(`/api/comments/component/${params.id}`)
        dispatch(getSingleUser())
        setComments(data)
    }

    // helper function that sees if you liked already
    const likedAlready = (commentId) => {
        for (let i = 0; i < user.comments?.length; i++) {
            if (user.comments[i].id === commentId) {
                return true
            }
        }
        return false

    }

    // helper function that sees if its your own comment
    const ownComment = (commentId) => {
        for (let i = 0; i < user.comments?.length; i++) {
            if (user.comments[i].id === commentId && user.comments[i].user_comments.isAuthor) {
                return false
            }
        }
        return true
    }

    // helper function that converts the date value to a readable date string
    const convertDate = (str) => {
        const date = new Date(str)
        return date.toDateString()
    }


    React.useEffect(()=>{
        async function getComments() {
            //get all of its comments as well
            const {data} = await axios.get(`/api/comments/component/${params.id}`)
            setComments(data)

            // TEMPORARY, set the single user
            dispatch(getSingleUser())
        }
        getComments()
    },[])

    return (
        <div id="comments-root">
            <h1>Comments</h1>
            <div id="comments-list">
            {props.loggin ?
            <div id="comments-form" className='comment-box'>
                <p className='comment-name'>Write your own comment:</p>
                <input value={comment} onChange={(event)=>setComment(event.target.value)}></input><button onClick={submitComment}>Submit</button>
            </div>
            : <div></div>}
            {comments?.map((comment) =>
                <div className='comment-box' key={comment.id}>
                    <div className="comment-name">{comment.users[0].username}
                    {/* Check to see if its your own comment OR if you liked it already, and changes the symbol accordingly */}
                    {props.loggin && ownComment(comment.id) ? <div className="comment-heart">{likedAlready(comment.id)
                    ? <span className='comment-hearted' onClick={unlikeHandler} value={comment.id}><IconContext.Provider
                    value={{ size: "25px"}}
                  >
                    <FaHeart/>
                  </IconContext.Provider></span>
                    :<span onClick={likeHandler} value={comment.id}><IconContext.Provider
                    value={{ size: "25px"}}
                  >
                    <FaRegHeart/>
                  </IconContext.Provider></span>}</div>
                    : <div></div>}
                    <span>{(comment.users.length - 1) + '  Like(s)'}</span>
                    <span className="comment-date">{convertDate(comment.createdAt)}</span>
                    </div>
                    {/* this is the split between "header" and message */}
                    <p className="comment-content">{comment.message}</p>
                </div>
                )}
            </div>
        </div>
    )
}

export default CommentsSection