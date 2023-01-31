import React from 'react';
import './header.scss'
import {GiClothes} from 'react-icons/gi'

const Header = () => {
    return (
        <header className="header">
            <div className="container">
                <nav className="header__nav">
                    <div className="header__logo">
                        <GiClothes/>CLOTHES
                    </div>
                        <ul className="header__list">
                            <li className="header__item">Design</li>
                            <li className="header__item">Health</li>
                            <li className="header__item">Workout</li>
                            <li className="header__item">Activity</li>
                            <li className="header__item">Connect</li>
                        </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;