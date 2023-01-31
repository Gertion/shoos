import React from 'react';


const Product = ({photo, title, price}) => {
    return (
        <div className='check__card'>
            <img className="check__card-img" src={photo} alt={title}/>
            <h3 className="check__card-title">{title}</h3>
            <p className="check__card-price">{price > 0 ? `$${price}.00` : `Free*`}</p>
            <button style={{background: price <= 0 && 'orange'}} className='check__card-btn' type="button">{price > 0 ? 'Buy' : 'Apply'}</button>
        </div>
    );
};

export default Product;