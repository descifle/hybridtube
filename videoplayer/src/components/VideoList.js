import React from 'react';
import './videolist.scss';
import VideoItem  from './/VideoItem';

const VideoList = ({ videos, onVideoSelect, status, removeVideo}) => {

    const renderedList = videos.map((video) => {
        return <VideoItem removeVideo={removeVideo} status={status} key={video.id.videoId} onVideoSelect={onVideoSelect} video={video} />
    })

    return (
        <div className={status}>
            {status ? <h2 className="w-100">{videos.length > 0 ? "Your Saved Videos" : <button className="btn btn-danger">Must be logged in</button>}</h2> : false}
            {renderedList}
        </div>
    )
}

export default VideoList;