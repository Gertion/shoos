import React, {useState} from 'react';
import './header.scss'
import {GiClothes} from 'react-icons/gi'
import Basket from "../Basket/Basket";
import {toast} from 'react-toastify'

const Header = ({dark, setBasket, basket}) => {
    const [active, setActive] = useState(false)
    return (
        <header className="header">
            <div className="container">
                <nav className="header__nav">
                    <div className="header__logo" style={{background: dark ? 'black' : '#bcbcbc'}}>
                        <GiClothes/>CLOTHES
                    </div>
                        <ul className="header__list" style={{background: dark ? 'black' : '#eeeeee' , color: dark ? 'white' : 'black'}}>
                            <li className="header__item">Design</li>
                            <li className="header__item">Health</li>
                            <li className="header__item">Workout</li>
                            <li className="header__item">Activity</li>
                            <li className="header__item">Connect</li>
                            <li className="header__item"  style={{cursor: 'pointer'}} onClick={() => {
                                if (basket.length> 0){
                                    setActive(true)
                                }
                                else {
                                    toast.error('You have not added an item to your cart')
                                }
                            }}>shopping cart {basket.length > 0 ? basket.length : ''}</li>
                        </ul>
                    <Basket setBasket={setBasket} basket={basket} active={active} setActive={setActive}/>
                </nav>
            </div>
        </header>
    );
};

export default Header;