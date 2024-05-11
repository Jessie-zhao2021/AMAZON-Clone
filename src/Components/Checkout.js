import React from 'react'
import Header from './Header';
import './Checkout.css';
import Subtotal from './Subtotal';
import CheckoutProduct from './CheckoutProduct ';
import CurrencyFormat from 'react-currency-format';
import { useStateValue } from './StateProvider';

function Checkout() {
  const [{ cart }] = useStateValue();

  return (
    <div>
        <Header />
        <div className='checkout'>
          <div className='checkout_left'>
            <img className='checkout_ad' src='https://m.media-amazon.com/images/I/61O6kjk2uXL._SX3000_.jpg'/>
            <div className='checkout_info'>
                { cart?.length === 0 ? (
                    <div>
                        <h2>Your Shopping cart is empty.</h2>
                        <p>
                            You have no items in your cart. To buy one or more items, click 'Add to cart' next to the item.
                        </p>
                    </div>
                    ) 
                : 
                    (
                    <div>
                        <h2 className='checkout_title'>Your Shopping Cart</h2>
                        {/* List out all of the Checkout Products */}
                        {cart?.map(item => (
                            <CheckoutProduct 
                            id={item.id}
                            title={item.title}
                            image={item.image}
                            price={item.price}
                            rating={item.rating}
                            />
                        ))}
                    </div>
                    )
                }
            </div>
          </div>
          {cart.length > 0 && (
              <div className='checkout_right'>
                <Subtotal />
              </div>
          )}          
        </div>
    </div>
  )
}

export default Checkout;