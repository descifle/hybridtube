import React, { useState, useEffect } from 'react';
import './videodetail.css';

const VideoDetail = ({video, saveVideo}) => {
    const [loggedIn, setLoggedIn] = useState(false)

    const validateLogin = () => {
        if(localStorage.getItem('username') !== "" && localStorage.getItem('username') !== null) {
            setLoggedIn(true)
        }
    }

    useEffect(() => {
        validateLogin()
    }, [])
 
    if(!video) {
        return <div>Loading...</div>
    }

    const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`

    return (
        <div className="card">
            <div className="embed-responsive embed-responsive-16by9">
                <iframe title="embed-responsive-item" src={videoSrc}/>
            </div>
            <div className="card-body">
                <h4 className="card-title">{video.snippet.title}</h4>
                <p className="text-muted">{video.snippet.description}</p>
                <button className="btn btn-save float-right" onClick={loggedIn ? () => {saveVideo(video)} : () => {alert("You must be logged in to use this")}}>Save Video</button>
            </div>
        </div>
    )
}

export default VideoDetail