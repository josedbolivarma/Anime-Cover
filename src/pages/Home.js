import React from 'react'
import Banner from '../components/Banner/Banner'
import GalleryContainer from '../containers/GalleryContainer/GalleryContainer'

const Home = () => {
  console.log("Gallery.js");  

  return (
    <div>
        <Banner /> 
        <GalleryContainer />
    </div>
  )
}

export default Home