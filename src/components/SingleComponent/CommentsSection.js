import React from "react";
import anime from "animejs/lib/anime.es.js"

const CommentsSection = () => {

    const [comment, setComment] = React.useState('')
    const [temp, setTemp] = React.useState(false)

    const submitComment = () => {
        console.log(comment)
        setComment('')
    }

    const likeHandler = (id) => {
        setTemp(!temp)
        if (!temp) {
            anime({
                targets: `.${id}`,
                scale: [2,1],
                duration: 200,
                easing: 'easeOutCubic'
            })
        }
    }
    
    return (
        <div id="comments-root">
            <h1>Comments</h1>
            <div id="comments-list">
            <div id="comments-form" className='comment-box'>
                <p className='comment-name'>Write your own comment:</p>
                <input value={comment} onChange={(event)=>setComment(event.target.value)}></input><button onClick={submitComment}>Submit</button>
            </div>
            <div className='comment-box' key="1">
                <div className="comment-name">Thomas Bak <div onClick={()=>likeHandler('one')} className="comment-heart one">{temp ? <span>&#9829;</span>:<span>&#9825;</span>}</div></div>
                <p className="comment-content">This component is literally the best thing I've ever seen.
                I cannot believe I went my whole life without seeing this. I am reborn.</p>
            </div>
            <div className='comment-box' key="2">
                <div className="comment-name">Benjamin Lee<div onClick={()=>likeHandler('two')} className="comment-heart two">{temp ? <span>&#9829;</span>:<span>&#9825;</span>}</div></div>
                <p className="comment-content">@Thomas seriously? You think this is good? Bruh get good, I 
                do this kind of stuff everyday in my SLEEP.</p>
            </div>
            <div className='comment-box' key="3">
                <div className="comment-name">Cathal C<div onClick={()=>likeHandler('three')} className="comment-heart three">{temp ? <span>&#9829;</span>:<span>&#9825;</span>}</div></div>
                <p className="comment-content">Yo</p>
            </div>
            <div className='comment-box' key="4">
                <div className="comment-name">Alec<div onClick={()=>likeHandler('four')} className="comment-heart four">{temp ? <span>&#9829;</span>:<span>&#9825;</span>}</div></div>
                <p className="comment-content">Yo yo</p>
            </div>
            </div>
        </div>
    )
}

export default CommentsSection