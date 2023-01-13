import React from 'react'
import { Link } from 'react-router-dom'


const VideoCard = ({video:{id :{videoId}, snippet}}) => {
  return (
    <div className=''>
      <Link to= {videoId && `/video/${videoId}`}>
        <img src={snippet?.thumbnails?.high?.url} alt={snippet?.title} className=" rounded-lg"/>
      </Link>
    </div>
  )
}

export default VideoCard