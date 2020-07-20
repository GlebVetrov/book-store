import React from 'react';
import './shop-header.css';
import { NavLink } from 'react-router-dom';

const ShopHeader = ({ numItems, total }) => {
    return (
        <header className='shop-header row'>
            <NavLink to='/book-store'>
                <div className='logo text-primary' href='#'>BooksStore</div>
            </NavLink>
            <NavLink to='/book-store/cart'>
                <div>
                    <i className='cart-icon fa fa-shopping-cart'/>
                    {numItems} items (${total})
                </div>
            </NavLink>
        </header>
    )
}

export default ShopHeader