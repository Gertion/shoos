import React from 'react';

const Basket = ({active, setActive}) => {
    return (
        <div onClick={((e) => {
            if (e.target.className.includes('value')) {
                setActive(false)
            }
        })} className={`overlay2 ${active ? 'overlay_active' : ''}`}>
            <div className="popup2">
                <h2 className="popup2__title">Карзина</h2>
                <div className="popup2__card">
                    <img className="popup2__img" src="" alt=""/>
                    <div className="popup2__info">
                        <p className="popup2__name">Iphone</p>
                        <p className="popup2__price">1300$</p>
                    </div>
                    <button className="popup2__btn">x</button>
                </div>
                <div className="popup2__card">
                    <img className="popup2__img" src="" alt=""/>
                    <div className="popup2__info">
                        <p className="popup2__name">Apple WATCH</p>
                        <p className="popup2__price">100$</p>
                    </div>
                    <button className="popup2__btn">x</button>
                </div>
                <div className="popup2__total">
                    <div className="popup2__total-info">
                        <p className="popup2__total-sum">Итого:</p>
                        <p className="popup2__total-price">21 321$</p>
                    </div>
                    <div className="popup2__total-info">
                        <p className="popup2__total-sum">Налог 5%</p>
                        <p className="popup2__total-price">11 321$</p>
                    </div>
                    <button className="popup2__total-btn">Оформить заказ</button>
                </div>
            </div>
        </div>
    );
};

export default Basket;