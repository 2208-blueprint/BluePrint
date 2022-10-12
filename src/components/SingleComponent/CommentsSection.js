import React from "react";
import anime from "animejs/lib/anime.es.js"
import axios from "axios";
import {useParams} from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux";
import { getSingleUser } from "../../store/users/singleUserSlice";

const CommentsSection = (props) => {

    const [comment, setComment] = React.useState('')
    const [comments, setComments] = React.useState([])
    const [temp, setTemp] = React.useState(false)

    const user = useSelector(state => state.singleUser)

    const params = useParams()
    const dispatch = useDispatch()

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
        dispatch(getSingleUser())

    }

        // Like and unlike handler

    const likeHandler = async(event) => {
        await axios.post(`api/comments/${event.target.getAttribute('value')}/like`, {
        }, {
            headers: {
                authorization: window.localStorage.getItem('token')
            }
        })
        const {data} = await axios.get(`/api/comments/component/${params.id}`)
        dispatch(getSingleUser())
        setComments(data)
    }

    const unlikeHandler = async(event) => {
        await axios.delete(`api/comments/${event.target.getAttribute('value')}/unlike`,{
            headers: {
                authorization: window.localStorage.getItem('token')
            }
        })
        const {data} = await axios.get(`/api/comments/component/${params.id}`)
        dispatch(getSingleUser())
        setComments(data)
    }

    const likedAlready = (commentId) => {
        for (let i = 0; i < user.comments?.length; i++) {
            if (user.comments[i].id === commentId) {
                return true
            }
        }
        return false
        
    }

    // another function

    const ownComment = (commentId) => {
        for (let i = 0; i < user.comments?.length; i++) {
            if (user.comments[i].id === commentId && user.comments[i].user_comments.isAuthor) {
                return false
            }
        }
        return true
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

    console.log(comments)
    
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
                    <div className="comment-name">{comment.users[0].username} {props.loggin && ownComment(comment.id) ? <div className="comment-heart">{likedAlready(comment.id) ? <span value={comment.id} onClick={unlikeHandler}>&#9829;</span>:<span value={comment.id} onClick={likeHandler}>&#9825;</span>}</div> : <div></div>}</div>
                    <p className="comment-content">{comment.message}</p>
                </div>
                )}
            </div>
        </div>
    )
}

export default CommentsSection