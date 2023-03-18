import React from 'react';
import Home from '../../pages/Home/Home';
import Header from '../../components/Header/Header.js';

const AppRouter = () => {
  return (
    <div>
      <Header />
        <Home />
    </div>
  )
}

export default AppRouter