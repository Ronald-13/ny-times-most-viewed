import React from 'react';
import './Navbar.scss';
import menuIcon from '../../assets/icons/white-menu.jpg';

const navbar = (props) => (
    <nav className="navbar aqua-marine">
        <div className="navbar-brand white">
            <img src={menuIcon} width="20" height="20" className="d-inline-block align" alt="" />
            <span className="pad-left">NY Times Most Popular</span>
        </div>
    </nav>
)

export default navbar;