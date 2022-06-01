import React from 'react';
import Home from '../../pages/Home';
import Header from '../../components/Header/Header.js';
import './AppRouter.scss';

const AppRouter = () => {
  return (
    <div className='appRouter'>
      <Header />
        <Home />
    </div>
  )
}

export default AppRouter