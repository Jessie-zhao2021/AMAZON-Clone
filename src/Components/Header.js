import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
import SearchIcon from '@material-ui/icons/Search';
import { ShoppingBasket } from '@material-ui/icons';

function Header() {
  return (
    <nav className='header'>
        {/* logo on the left */}
        <Link to='/'>
          <img 
            className='header_logo' 
            src='https://pngimg.com/uploads/amazon/amazon_PNG11.png' 
            alt='logo'/>
        </Link>
        {/* seach box */}
        <div className='header_search'>
            <input type='text' className='headr_searchInput'/>
            <SearchIcon className='header_searchIcon'/>
        </div>
        {/* 3 Links */}
        <div className='header_nav'>
            {/* 1st link */}
            <Link to="/login" className='header_link'>
                <div className='header_option'>
                    <span className='header_optionLineOne'>Hello Jessie</span>
                    <span className='header_optionLineTwo'>Sign In</span>
                </div>                
            </Link>
            {/* 2nd link */}
            <Link to="/" className='header_link'>
                <div className='header_option'>
                    <span className='header_optionLineOne'>Returns</span>
                    <span className='header_optionLineTwo'>& Orders</span>
                </div>                
            </Link>
            {/* 3rd link */}
            <Link to="/" className='header_link'>
                <div className='header_option'>
                    <span className='header_optionLineOne'>Your</span>
                    <span className='header_optionLineTwo'>Prime</span>
                </div>                
            </Link>
            {/* 4th link */}
            <Link to='/checkout' className='header_link'> 
                <div className='header_optionBasket'>
                    {/* Shopping basket icon */}
                    <ShoppingBasket />
                    {/* Number of items in the basket */}
                    <span className='header_optionLineTwo header_basketCount'>0</span>
                </div>
            </Link>
        </div>
    </nav>
  )
}

export default Header