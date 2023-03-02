import React, {useState} from 'react';
import './basket.scss'

const Basket = ({active, setActive, basket, setBasket}) => {
    const [order, setOrder] = useState(false)
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')

        if (active){
    document.body.classList.add('active-overlay2')
} else {
    document.body.classList.remove('active-overlay2')
}

    return (
        <>
            {
                active && (
                    <div className="overlay2" onClick={() => setActive(false) }>
                        <div className="overlay2__popup" onClick={e => e.stopPropagation()}>
                            <form className="overlay2__form">
                                <button className="overlay2__closeBtn" onClick={() => setActive(false)}>X</button>
                                <h2 className="overlay2__title" >Карзина</h2>
                                <div className="overlay2__row">{
                                    basket.map((item) =>(
                                        <div key={item.id} className="overlay2__card">
                                            <img className="overlay2__card-img"  src={item.photo} alt="" width="100" height="100"/>
                                            <div className="overlay2__info">
                                                <p className="overlay2__info-name">{item.title}</p>
                                                <p className="overlay2__info-price">{item.price}$</p>
                                            </div>
                                            <button onClick={() => {
                                                setBasket(basket.filter((el) => el.id !== item.id))
                                                if (basket.length === 1){
                                                    setActive(false)
                                                }
                                            }
                                            } className="overlay2__btn">Х</button>
                                        </div>
                                        ))
                                }</div>
                                <div className="overlay2__total">
                                    <div className="overlay2__total-info">
                                        <p className="overlay2__total-sum">Итого:</p>
                                        <p className="overlay2__total-price">{basket.reduce((accumulator, currentValue) => +accumulator + +currentValue.price,0)} $</p>
                                    </div>
                                    <div className="overlay2__total-info">
                                        <p className="overlay2__total-sum">Налог 5%</p>
                                        <p className="overlay2__total-price">{Math.round(basket.reduce((accumulator, currentValue) => +accumulator + +currentValue.price,0) /100 * 5)}$</p>
                                    </div>
                                    <div style={{display: order ? 'flex' : 'none'}} className="overlay2__inputs">
                                        <input onChange={(e) => setName(e.target.value)} value={name} className="overlay2__input" placeholder='Name' type="text"/>
                                        <input onChange={(e) => setPhone(e.target.value)} value={phone} className="overlay2__input" placeholder="Phone" type="tel"/>
                                    </div>
                                </div>
                            </form>
                            <button onClick={() => {
                                if (!order) {
                                    setOrder(true)
                                } else {
                                    console.log({
                                        name: name,
                                        phone: phone,
                                        order: basket
                                    })
                                }
                            }} className="overlay2__total-btn">{order ? "Order" : "Checkout"}</button>
                        </div>
                    </div>
                )
            }

        </>
    );
};

export default Basket;