import React from 'react';
import './Sidebar.scss';

const Sidebar = () => {
  return (
    <div className='sidebar'>
        <div className='sidebar__box'>
            <h2 className='sidebar__title'>RECENT EPISODES</h2>
            <h2 className='sidebar__title'>RECOMMENDED</h2>
        </div>

        <div className='sidebar__cards'>
            <div className='sidebar__card'>
            <img src='https://cdn.myanimelist.net/images/characters/9/215563.jpg?s=5b0650bb09a7e053afc6bad84ab48947' className='sidebar__avatar'/>
            <div className='sidebar__cardContent'>
                <div>
                <h3><b>Shingeki no Kiojin</b></h3>
                <h4>Episode: the Titan Fight</h4>
                </div>
                <h5>3.600 Views</h5>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Sidebar