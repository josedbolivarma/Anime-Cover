import React from 'react';
import './GalleryContainer.scss';
import Gallery from '../../components/Gallery/Gallery';
import Sidebar from '../../components/Sidebar/Sidebar';

const GalleryContainer = () => {

  return (
    <div className='galleryContainer'>
        <Gallery />
        <Sidebar />
    </div>
  )
}

export default GalleryContainer