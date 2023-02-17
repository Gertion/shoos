import React, {useState} from 'react';
import './popup.scss'
import axios from "axios";




const Popup = ({getAllProducts,active, setActive}) => {
    const addProduct = (e) =>{
        e.preventDefault()
        axios.post('http://localhost:8080/products/', {
            photo: e.target[0].value,
            title: e.target[1].value,
            price: e.target[2].value,
        }).then(()=> {
            getAllProducts()
            setActive(false)
        }).catch(() => alert('Error, you can not add product'))}


        if (active){
    document.body.classList.add('active-overlay')
} else {
    document.body.classList.remove('active-overlay')
}
    return (
        <>
            <button className="btn-active" onClick={() => setActive(true)}>Add Form</button>
            {
                active && (
                    <div className="overlay" onClick={() => setActive(false) }>
                        <div className="overlay__popup" onClick={e => e.stopPropagation()}>
                            <button onClick={() => setActive(false)} className="overlay__closeBtn">X</button>
                            <form className="overlay__form" onSubmit={(e) => addProduct(e)}>
                                <h2 className="overlay__title" >Создайте продукт</h2>
                                <p className="overlay__subtext">Заполните форму ниже, чтобы добавить товар.</p>
                                <label className="overlay__label" htmlFor="img">
                                    <span className="overlay__label-text" >Фотография</span>
                                    <input required className="overlay__label-field" type="text" placeholder="Фотография/URL"/>
                                </label>
                                <label className="overlay__label" htmlFor="title">
                                    <span className="overlay__label-text">Название</span>
                                    <input required className="overlay__label-field" type="tel" placeholder="Название продукта"/>
                                </label>
                                <label className="overlay__label" htmlFor="price">
                                    <span className="overlay__label-text">Цена</span>
                                    <input required className="overlay__label-field" type="text" placeholder="Цена"/>
                                </label>
                                <button type="submit">Отправить</button>
                            </form>
                        </div>
                    </div>
                )
            }

        </>
    );
};

export default Popup;