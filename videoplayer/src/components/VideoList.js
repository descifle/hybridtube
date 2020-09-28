import React from 'react';
import './videolist.scss';
import VideoItem  from './/VideoItem';

const VideoList = ({ videos, onVideoSelect, status, removeVideo, userLogged}) => {

    const playList = () => {
        if(userLogged === true) {
            return  <h2 className="w-100">{videos.length > 0 ? "Your Saved Videos" : "No saved videos"}</h2>
        } else {
            return <button onClick={() => {window.location = '/login'}}>Login to use</button>
        }
    }

    const renderedList = videos.map((video) => {
        return <VideoItem removeVideo={removeVideo} status={status} key={video.id.videoId} onVideoSelect={onVideoSelect} video={video} />
    })

    return (
        <div className={status}>
            {status ? playList() : false}
            {renderedList}
        </div>
    )
}

export default VideoList;