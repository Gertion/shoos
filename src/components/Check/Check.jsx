import React, {useEffect, useState} from 'react';
import './check.scss'
import Product from "./Product";
import Popup from "../Popup/Popup";
import axios from "../axios";
import {Switch} from "@mui/material";
import Select from '../UI/Select/Select'


const Check = ({dark, setDark, basket, setBasket}) => {

    const [count, setCount] = useState(1)
    const [search, setSearch] = useState('')
    const [active, setActive] = useState(false)
    const [products, setProduct] = useState([])
    const [sort, setSort] = useState('')


    const productFilterSearch =  products.filter((item) => item.title.toUpperCase().includes(search.toUpperCase())).length



    const getAllProducts = () =>{
    axios('/products')
        .then(({data}) => setProduct(data.reverse()))
}
    useEffect(() => {
        getAllProducts()
}, [])

    return (
        <section className="check">
            <div className='container' >
                <div className='check__content' style={{background: dark ? 'black' : '#eeeeee'}}>
                    <Switch onChange={() => setDark(!dark)} size="small" />
                    <div className='check__top'>
                        <h2 className="check__title">Watch this!</h2>
                        <div className="check__right">
                            <Select setSort={setSort}/>
                            <input value={search} className="check__search" type="search" onChange={(event) => {
                                setSearch(event.target.value)
                                setCount(1)
                            }}/>
                            <Popup getAllProducts={getAllProducts} active={active} setActive={setActive}/>
                            <a className="check__link" href='22'>
                                see all >
                            </a>
                        </div>
                    </div>
                    <div className='check__row'>
                        {/*СОРТИРОВКА*/}
                        {products.sort((a, b) => {
                                if (sort === 'small') {
                                    return a.price - b.price
                                }
                                if (sort === 'big') {
                                    return b.price - a.price
                                }
                            }
                        ).filter((item, index) => item.title.toUpperCase().includes(search.toUpperCase())).filter((item,index) => index < 4 * count).map((item) => (
                            <React.Fragment key={item.id}>
                                <Product basket={basket} setBasket={setBasket} getAllProducts={getAllProducts} item={item}/>
                            </React.Fragment>
                        ))}
                    </div>
                    {
                        !productFilterSearch && <h2 className='check__underfined'>По данному запросу товар не найден</h2>
                    }
                    {count * 4 >= products.length ?
                        <button type="button" onClick={() => setCount(1)}>Скрыть</button>
                        : <button style={{display: count * 4 >= productFilterSearch ? 'none' : "inline-block"}}
                                type="button" onClick={() => {setCount(count + 1)}}> Показать еще</button>}

                    {
                        productFilterSearch ? <span className="check__sum">Показано {count * 4 >= productFilterSearch
                            ? productFilterSearch
                            : 4 * count} из {productFilterSearch}
                    </span> : ''
                    }
                </div>
            </div>

        </section>
    );
};

export default Check;