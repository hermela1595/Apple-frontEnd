import React, { useEffect, useState} from 'react'
import './Youtube.css'

function YoutubeFeb() {
    const [YouTubeVideos, setVideos] = useState([])
    const apikey=process.env.REACT_APP_YOUTUBE_APIKEY

    useEffect(() => {
        fetch(
            `https://youtube.googleapis.com/youtube/v3/search?part=id%2C%20snippet&channelId=UCE_M8A5yxnLfW0KghEeajjw&maxResults=10&order=date&key=${apikey}`
            )
        .then((response) => {
            console.log(response);
            return response.json()
        })
        // .then((response) => console.log(response))
        .then((data) =>{
            console.log(data);
            const YouTubeVideosData =data.items;

            setVideos(YouTubeVideosData)
        })
    },[])
    console.log(YouTubeVideos);
  return (
    <div className='allVideosWrapeer'>
        <div className='container'>
            <div className='row jusstify-content-center text-center' >
                <div className='col-12'>
                    <div className='title-wrapper'></div>
            </div>
            {YouTubeVideos?.map((singleVideo) => {
                let vidId = singleVideo.id.videoId;
                let vidLink = `https://www.youtube.com/watch?v=$vidId`;
                let videoWrapper =(
                    <div key={vidId} className='col-sm-12 col-md-6'>
                        <div className='singleVideoWrapper'>
                        <div className='<div></div>ideoThumbnail'>
                            <a href={vidLink} target='blank'>
                                <img src={singleVideo.snippet.thumbnails.high.url}/>
                            </a>
                        </div>
                        <div className='videoInfoWrapper'>
                            <div className='videoTitle'>
                            <a her={vidLink} target='blank'/>
                                {singleVideo.snippet.title}
                            </div>
                        </div>
                        <div className='videoDesc'>
                        {singleVideo.snippet.description}
                        </div>
                        </div>
                    </div>
                )
                return videoWrapper
            })}
            </div>
        </div>
    </div>
  )
}

export default YoutubeFeb



//   https://youtube.googleapis.com/youtube/v3/search?part=id&channelId=UCE_M8A5yxnLfW0KghEeajjw&maxResults=6&order=date&key=AIzaSyCLdwvgv5koZa3LVtPCo5MtTRlX2KaD9qI

