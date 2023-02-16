import React, {useEffect, useState} from 'react';
import './check.scss'
import Product from "./Product";
import Popup from "../Popup/Popup";
import axios from "axios";


const Check = () => {

    const [count, setCount] = useState(1)
    const [search, setSearch] = useState('')
    const [active, setActive] = useState(false)
    const [products, setProduct] = useState([])

useEffect(() => {
    axios('http://localhost:8080/products')
        .then(({data}) => setProduct(data))
}, [])


let productFilterSearch =  products.filter((item) => item.title.toUpperCase().includes(search.toUpperCase())).length
  console.log(productFilterSearch)
    return (
        <section className="check">
            <div className='container'>
                <div className='check__content'>
                    <div className='check__top'>
                        <h2 className="check__title">Watch this!</h2>
                        <div className="check__right">
                            <input value={search} className="check__search" type="search" onChange={(event) => {
                                setSearch(event.target.value)
                                setCount(1)
                            }}/>
                            <Popup active={active} setActive={setActive}/>
                            <a className="check__link" href='22'>
                                see all >
                            </a>
                        </div>

                    </div>
                    <div className='check__row'>
                        {products.filter((item, index) => item.title.toUpperCase().includes(search.toUpperCase())).filter((item,index) => index < 4 * count).map((item) => (
                            <React.Fragment key={item.id}>
                                <Product photo={item.photo} price={item.price} title={item.title}/>
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
                        productFilterSearch ? <span>Показано {count * 4 >= productFilterSearch
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