import React from 'react';
import Header from './Header';
import './Home.css';
import Product from './Product';

function Home() {
  return (
    <div>
        <Header/>
        <div className='home_page'>
           <img 
             className='home_poster' 
             src='https://m.media-amazon.com/images/I/710QbjOzj3L._SX3000_.jpg' 
             alt='poster'
           />
           <div className='home_row'>
              <Product 
                id={1}
                title='Cognitive Behavioral Therapy: Simple Techniques to Instantly Be Happier, Find Inner Peace, and Improve Your Life'
                price={24.99}
                rating={5}
                image='https://m.media-amazon.com/images/I/41HrA3UTTKL._SY445_SX342_.jpg'
              />
              <Product 
                id={2}
                title='Cognitive Behavioral Therapy and Mindfulness: 2 Books in 1'
                price={28.99}
                rating={5}
                image='https://m.media-amazon.com/images/I/61VIIXoFxfL._SY385_.jpg'
              />
              <Product 
                id={3}
                title='Mindfulness: The Remarkable Truth Behind Meditation and Being Present in Your Life'
                price={83.77}
                rating={5}
                image='https://m.media-amazon.com/images/I/31INWUT15+L._SY445_SX342_.jpg'
              />
               <Product 
                id={4}
                title='Princess Peach: Showtime! - Nintendo Switch'
                price={79.95}
                rating={4}
                image='https://m.media-amazon.com/images/I/817uh8VCGiL._AC_SY741_.jpg'
              />
            </div>
            <div className='home_row'>
              <Product 
                id={5}
                title='Apple AirPods Pro (2nd Generation) with MagSafe Case (USB‑C)'
                price={399.00}
                rating={4}
                image='https://m.media-amazon.com/images/I/61SUj2aKoEL._AC_SX679_.jpg'
              />
              <Product 
                id={6}
                title='Apple 2021 iPad (10.2-inch iPad Wi-Fi, 64GB) - Space Grey (9th Generation)'
                price={549.00}
                rating={5}
                image='https://m.media-amazon.com/images/I/61uZ4l7QVJL.__AC_SY445_SX342_QL70_ML2_.jpg'
              />
              <Product 
                id={7}
                title='Stop Overthinking: 23 Techniques to Relieve Stress, Stop Negative Spirals'
                price={18.41}
                rating={5}
                image='https://m.media-amazon.com/images/I/51UL-bWedDL._SY445_SX342_.jpg'
              />
              <Product 
                id={8}
                title='SANTECO Solund Gradient Insulated Water Bottle'
                price={68.04}
                rating={4}
                image='https://m.media-amazon.com/images/I/71XULhtAL+L._AC_SX679_.jpg'
              />
            </div>
            <div className='home_row'>
              <Product 
                id={9}
                title='Pokémon TCG: Scarlet & Violet — 151 Elite Trainer Box'
                price={24.99}
                rating={5}
                image='https://m.media-amazon.com/images/I/81Ned3gMNqL._AC_SX679_.jpg'
              />
              <Product 
                id={10}
                title='8BitDo Zero 2 Bluetooth gamepad (Pink edition)'
                price={39.95}
                rating={4}
                image='https://m.media-amazon.com/images/I/51g5fFRYCiL.__AC_SX300_SY300_QL70_ML2_.jpg'
              />
              <Product 
                id={11}
                title='Meta Quest 3 128GB ? Breakthrough Mixed Reality Headset'
                price={799.99}
                rating={4}
                image='https://m.media-amazon.com/images/I/81whTB488bL.__AC_SX300_SY300_QL70_ML2_.jpg'
              />
              <Product 
                id={12}
                title='EPOMAKER x Feker Galaxy80 Gaming Keyboard, Aluminum Alloy Wireless Mechanical Keyboard'
                price={174.99}
                rating={5}
                image='https://m.media-amazon.com/images/I/7134lskyWnL._AC_SX522_.jpg'
              />
            </div>

        </div>
        
    </div>
  )
}

export default Home     