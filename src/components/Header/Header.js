import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <div className='header'>
            <div>
                <h1>Make a business team</h1>
                <p>We are trying to make a team, with successful people</p>
                <h2>Total Budget: <span className='highlight'>1 Million</span></h2>
            </div>
        </div>
    );
};

export default Header;