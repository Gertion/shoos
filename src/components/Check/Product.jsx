import React from 'react';
import axios from "../axios";
import {toast} from 'react-toastify'

const Product = ({getAllProducts, item, basket, setBasket}) => {

    const {photo, title, price, id} = item
    const deleteProduct = () =>{
        axios.delete(`/products/${id}`)
            .then(() => {
                getAllProducts()
                toast.success('Product successfully is deleted')
            }).catch(() => toast.error('Error! Product not removed'))
    }


    return (
        <div className='check__card'>
            <img  className="check__card-img" src={photo} alt={title} width="180" height="180"/>
            <h3 className="check__card-title">{title}</h3>
            <p className="check__card-price">{price > 0 ? `$${price}.00` : `Free*`}</p>
            <div className="check__card-btns">
                <button disabled={basket.findIndex((elem) => elem.id === item.id)>-1} onClick={() => setBasket([...basket, item])} style={{background: price <= 0 && 'orange'}} className='check__card-btn' type="button">{price > 0 ? 'Buy' : 'Apply'}</button>
                <button onClick={() => deleteProduct()} style={{background:'red'}} className='check__card-btn' type="button">Delete</button>
            </div>

        </div>
    );
};

export default Product;