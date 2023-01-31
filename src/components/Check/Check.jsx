import React from 'react';
import './check.scss'
import {products} from "../products";
import Product from "./Product";


const Check = () => {
    console.log(products)
    return (
        <section className="check">
            <div className='container'>
                <div className='check__content'>
                    <div className='check__top'>
                        <h2 className="check__title">Watch this!</h2>
                        <a className="check__link" href='22'>see all ></a>
                    </div>
                    <div className='check__row'>
                        {products.map((item) => (
                            <React.Fragment key={item.id}>
                                <Product photo={item.photo} price={item.price} title={item.title}/>
                            </React.Fragment>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Check;