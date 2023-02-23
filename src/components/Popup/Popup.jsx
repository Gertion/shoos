import React, {useState} from 'react';
import './popup.scss'
import axios from '../axios'
import {toast} from 'react-toastify'



const Popup = ({getAllProducts,active, setActive}) => {
    const addProduct = (e) =>{
        e.preventDefault()
        axios.post('/products/', {
            photo: e.target[1].value,
            title: e.target[2].value,
            price: e.target[3].value,
        }).then(() => {
            getAllProducts()
            setActive(false)
            toast.success('Product add in web')
            e.target[1].value = ''
            e.target[2].value = ''
            e.target[3].value = ''
        }).catch(() => toast.error('Error, you can not add product'))
    }


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

                            <form className="overlay__form" onSubmit={(e) => addProduct(e)}>
                                <button className="overlay__closeBtn" onClick={() => setActive(false)}>X</button>
                                <h2 className="overlay__title" >Создайте продукт</h2>
                                <p className="overlay__subtext">Заполните форму ниже, чтобы добавить товар.</p>
                                <label className="overlay__label" htmlFor="img">
                                    <span className="overlay__label-text" >Добавьте фотографию товара</span>
                                    <input required className="overlay__label-field" type="text" placeholder="Фотография/URL"/>
                                </label>
                                <label className="overlay__label" htmlFor="title">
                                    <span className="overlay__label-text">Добавьте название товара</span>
                                    <input required className="overlay__label-field" type="tel" placeholder="Название продукта"/>
                                </label>
                                <label className="overlay__label" htmlFor="price">
                                    <span className="overlay__label-text">Добавьте ценник товара</span>
                                    <input required className="overlay__label-field" type="num" placeholder="Цена"/>
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