import React from 'react'
import {Routes,  Route } from 'react-router-dom'
import NavBar from './componenets/NavBar';
import VideoDetailsComponent from './componenets/VideoDetailsComponent';
import ChannelComponent from './componenets/ChannelComponent';
import SearchFeedComponent from './componenets/SearchFeedComponent';
import HomeComponent from './componenets/HomeComponent';

const Home = () => {
  return (
    <div className=''>
      <NavBar/>
      <Routes>
          <Route path="/" element={<HomeComponent/>} />
          <Route path="/video/:id" element={<VideoDetailsComponent/>} />
          <Route path="/channel/:id" element={<ChannelComponent/>} />
          <Route path="/search/:term" element={<SearchFeedComponent/>} />
      </Routes>

    </div>
  )
}

export default Home