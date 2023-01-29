import React from 'react'
import { Link } from 'react-router-dom'


const VideoCard = ({video:{id :{videoId}, snippet}}) => {
  return (
    <div className=''>
      <Link to= {`/video/${videoId}`}>
        <img src={snippet?.thumbnails?.high?.url} alt={snippet?.title} className=" rounded-lg"/>
      </Link>

      <div className='flex flex-col'>
      <Link to= {`/video/${videoId}`}>
        <span className="font-normal">{snippet?.title.slice(0, 60)}</span>
      </Link>
      <Link to= {`/channel/${snippet?.channelId}`}>
        <span className="font-normal text-sm text-gray-400">{snippet?.channelTitle.slice(0, 60)}</span>
      </Link>
      </div>

    </div>
  )
}

export default VideoCard