import React, {useState} from 'react';
import './popup.scss'

const Popup = ({}) => {
    const [active, setActive] = useState(false)
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
                    <div className="overlay" >
                        <div className="overlay__popup">
                            <button onClick={() => setActive(false)} className="overlay__closeBtn">X</button>
                            <form className="overlay__form">
                                <h2 className="overlay__title">Подача заявки</h2>
                                <p className="overlay__subtext">Оставьте свои контактные данные и наш менеджер свяжется с вами.</p>
                                <label className="overlay__label">
                                    <span className="overlay__label-text">Ваше имя и фамилия</span>
                                    <input required className="overlay__label-field" type="text" placeholder="Имя и Фамилия"/>
                                </label>
                                <label className="overlay__label">
                                    <span className="overlay__label-text">Ваш телефон/whatsapp</span>
                                    <input required className="overlay__label-field" type="tel" placeholder="Телефон/Whatsapp"/>
                                </label>
                                <label className="overlay__label">
                                    <span className="overlay__label-text">Ваша E-mail почта</span>
                                    <input required className="overlay__label-field" type="email" placeholder="E-mail"/>
                                </label>
                            </form>
                        </div>
                    </div>
                )
            }

        </>
    );
};

export default Popup;