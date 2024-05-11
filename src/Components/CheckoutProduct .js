import React from 'react';
import './CheckoutProduct.css'
import { useStateValue } from './StateProvider';

function CheckoutProduct ({id, title, image, price, rating}) {
  const [{ cart }, dispatch] = useStateValue();

  const removeFromCart = () => {
    dispatch({
        type: 'REMOVE_FROM_CART',
        id: id,
    })
  }

  return (
    <div className='CheckoutProduct'>
        <img className='CheckoutProduct_image' src={image} alt=''/>
        <div className='CheckoutProduct_info'>
            <p className='CheckoutProduct_title'>{title}</p>

            <p className='CheckoutProduct_price'>
                <small>$</small>
                <strong>{price}</strong>
            </p>

            <div className='CheckoutProduct_rating'>
                {Array(rating)
                  .fill()
                  .map(() => (
                    <p>🌟</p>
                  ))}
            </div>

            <button onClick={removeFromCart}>Remove from the cart</button>
        </div>
    </div>
  )
}

export default CheckoutProduct 