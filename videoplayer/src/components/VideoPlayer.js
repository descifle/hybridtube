import React, { useState, useEffect } from 'react';
import './videoplayer.scss';
import SearchBar from './SearchBar';
import youtube from '../apis/youtube';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';
import axios from 'axios';

const KEY = 'AIzaSyAfEaZF62jt_nxrzVhl40SASJPfLLURpS4';
// const KEY = 'AIzaSyAfEaZF62jt_nxrzVhl40SASJPdisabled';

const VideoPlayer = () => {
    const [savedVideos, setSavedVideos] = useState([]);
    const [videos, setVideos] = useState([]);
    const [selectedVideo, setSelectedVideo] = useState(null);
    const [loggedIn, setLoggedIn] = useState(false);
    const [user, setUser] = useState('');

    useEffect(() => {
        validateLogin()
        setUser(localStorage.getItem('trueUID'))
        onTermSubmit('building')
        if(loggedIn) {
            getSavedVideos()
        }
    }, [loggedIn])

    const onVideoSelect = (video) => {
        window.scrollTo({
            top: 0,
            // behavior: 'smooth'
        })
        setSelectedVideo(video)
    }

    const onTermSubmit = async (term) => {
        const response = await youtube.get('/search', {
            params: {
                q: term,
                part: 'snippet',
                type: 'video',
                maxResults: '5',
                key: KEY
            }
        }).catch(() => {console.log("Error retrieving data")})

        if(!response) {
            console.log('nada')
        } else if (response.status === 200) {
            setVideos(response.data.items)
            setSelectedVideo(response.data.items[0])
        } 
        
    }

    const getSavedVideos = async () => {

        if(loggedIn) {
            await axios.get('/users/get-videos', {
            params: {id: user}
            }).then((res) => {
                setSavedVideos(res.data.videos)
            }).catch(err => console.log(err))
        } else {
            console.log('user not logged in')
        }   
    }

    const saveVideo = (video) => {

        const sameVideo = savedVideos.find((videos) => {
            return videos.etag === video.etag
        })

        console.log(savedVideos)
        console.log(sameVideo)

        if(sameVideo) {
            console.log('already saved')
        } else if (!sameVideo){
            axios.post('/users/save-video', {
            params: { id: user, videos: video}
            }).catch((err) => {console.log(err)})
           
            console.log('Video saved')
            
            setTimeout(() => {
                getSavedVideos()
            }, 300)
        }
        
    }

    const removeVideo = (video) => {

        const videoID = video.etag

        const data = {
            user: user,
            videoId: videoID 
        }
        
        axios.post('/users/delete-video', data).then((msg) => {
            console.log(msg.data)
        }).catch(err => console.log(err))
        
        setTimeout(() => {
            getSavedVideos()
        }, 200)
    }

    const validateLogin = () => {
        if(localStorage.getItem('username') !== "" && localStorage.getItem('username') !== null) {
            setLoggedIn(true)
        }
    }

    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-12">
                <SearchBar onFormSubmit={onTermSubmit} />
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-lg-8 py-3">
                                <VideoDetail video={selectedVideo} saveVideo={saveVideo} />
                            </div>
                            <div className="col-lg-4">
                                <VideoList onVideoSelect={onVideoSelect} videos={videos} />
                            </div>
                            <div className="col-lg-12 pb-5">
                                <VideoList userLogged={loggedIn} removeVideo={removeVideo} status={"saved-video"} onVideoSelect={onVideoSelect} videos={savedVideos} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default VideoPlayer;