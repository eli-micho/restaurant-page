import React from 'react';
import { NavLink } from 'react-router-dom';
import './styles.scss';

const Header = () => {
    return (
        <div className="header">
            <div className="logoWrap">
                <h1>Le Café</h1>
            </div>

            <div className="ctaWrap">
                <ul>
                    <li><NavLink exact to="/" activeClassName="isActive">Home</NavLink></li>
                    <li><NavLink to="/about" activeClassName="isActive">Our Story</NavLink></li>
                    <li><NavLink to="/menu" activeClassName="isActive">Menu</NavLink></li>
                    <li><NavLink to="/contact" activeClassName="isActive">Contact Us</NavLink></li>
                </ul>
            </div>
        </div>
    )
};

export default Header;