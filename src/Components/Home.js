import React from 'react';
import Header from './Header';
import './Home.css';

function Home() {
  return (
    <div>
        <Header/>
        <div className='home_posterDiv'>
           <img className='home_poster' src='https://m.media-amazon.com/images/I/710QbjOzj3L._SX3000_.jpg' alt='poster'/>
        </div>
        
    </div>
  )
}

export default Home     