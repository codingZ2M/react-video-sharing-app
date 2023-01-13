import React, {useState, useEffect} from 'react'
import SideBar from './SideBar'
import VideosComponent from './VideosComponent'
import {fetchVideosFromAPI} from '../utils/videosFromAPI'

const HomeComponent = () => {
  const [selectedCategory, setSelectedCategory] = useState('New');
  const [videos, setVideos] = useState([]);

  useEffect (() => {
    fetchVideosFromAPI(`search?part=snippet&q=${selectedCategory}`)
      .then( (data) => setVideos(data.items));
  }, [selectedCategory]);


  return (
    <div className="flex flex-col sm:flex-row w-full px-8">
  
        <SideBar  selectedCategory={selectedCategory}
                 setSelectedCategory={setSelectedCategory}/>
   
      <div className='flex flex-col w-full items-center justify-center ml-0 sm:ml-40'>
              <div className='flex flex-col justify-start'>
              <h3 className='mt-4 sm:mt-8 flex justify-start text-xl sm:text-2xl'>{selectedCategory}</h3>
                  <VideosComponent videos={videos}/>
              </div>
      </div>
  </div>
  )
}

export default HomeComponent