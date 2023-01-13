import React from 'react'
import VideoCard from './VideoCard';
import ChannelCard from './ChannelCard';

const VideosComponent = ({videos}) => {
  console.log(videos)
  return (
    <div className='my-0 sm:my-2 grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
      {
        videos.map((video, id) => (
          <div key={id} className=''>
              {video.id.videoId && <VideoCard video={video}/>}
              {/* video.id.channelId && <ChannelCard channel={video}/> */}
          </div>
        ))
      }
    </div>
  )
}

export default VideosComponent
