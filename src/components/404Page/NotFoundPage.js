import React from 'react'
import { useNavigate } from 'react-router-dom'


function NotFoundPage() {
  const navigate = useNavigate();

  const onSubmit = () => {
    navigate('/');
  }
  return (
    <>
    <div className="not-found-bg-image"></div>
    <div className="not-found-main-text">
      <p className='oops'>Oops!</p>
      <p className='not-found-text'>404 page not found</p>
      <small className='not-found-text-extra'>The page you are looking for could have been removed<br></br> or is temporarily unavailable.</small>
      <button onClick={onSubmit}>Back to Homepage</button>
    </div>
    <div className="not-found-page-container">
      <div className='not-found-img'>
        <img src="https://media.giphy.com/media/Yf7kN6Xdle87K/giphy.gif" />
      </div>
    </div>
    </>

  )
}

export default NotFoundPage