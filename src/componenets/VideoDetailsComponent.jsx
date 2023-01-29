import React, {useState, useEffect} from 'react'
import { Link, useParams } from 'react-router-dom'
import ReactPlayer from 'react-player'
import {fetchVideosFromAPI} from '../utils/videosFromAPI'
import {BsEye} from "react-icons/bs";
import {AiOutlineComment} from "react-icons/ai";

const VideoDetailsComponent = () => {
const {id} = useParams();
const [videoDetails, setVideoDetails] = useState(null);

useEffect( ()=> {
  fetchVideosFromAPI(`videos?part=snippet,statistics&id=${id}`)
            .then( (data) => setVideoDetails(data.items[0]));
            console.log(videoDetails)
}, [id])

  return (
    <div className='mt-12 ml-20 flex items-center justify-start flex-col sm:flex-row w-full px-8'>
     
     <div className='flex flex-col'>
        <ReactPlayer url={`http:www.youtube.com/watch?v=${id}`}
                      controls />
      
        <div className='text-white mt-4 flex flex-col'>
          <span>{videoDetails.snippet.title}</span>
          <span>{videoDetails.snippet.channelTitle}</span>
        </div>

        <div className='text-white text-xs mt-4 w-1/2 text-justify flex gap-8'>
          <div className='flex gap-2'>
            <AiOutlineComment className='w-4 h-4'/> 
            <span>{videoDetails.statistics.commentCount}</span>
          </div>
          <div className='flex gap-2'>
            <BsEye className='w-4 h-4'/>
            <span>{videoDetails.statistics.viewCount}</span>
          </div>
        </div>

        <div className='text-white text-xs mt-4 w-1/2 text-justify'>
          <span>{videoDetails.snippet.description}</span>
        </div>
       </div>


       <div className='text-white'>
         side 
       </div>

    </div>
  )
}

export default VideoDetailsComponent