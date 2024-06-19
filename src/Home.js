import React from 'react'
import { useState,useEffect} from 'react';
import "./Home.css"
import BlogList from './BlogList';
import useFetch from './useFetch';


function Home() {
//map function cycles through the array which can be used rather than using multiple div
//useEffect runs on each render that is each time data changes....also initially
   const {data :blogs, isPending, error}=useFetch('http://localhost:8000/blogs');
    
  
  return (
        <div className='home'>
          {error && <div>{error}</div>}
          {isPending && <div>Loading....</div>}
         {blogs && <BlogList blogs={blogs} title="All Blogs" />} 
        </div>
    
  );
}

export default Home