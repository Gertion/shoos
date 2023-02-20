import React from 'react';
import './footer.scss';
import {ImFacebook} from 'react-icons/im';
import {FaTwitter} from 'react-icons/fa';
import {BsInstagram} from 'react-icons/bs'


const Footer = () => {

    return (
        <footer className="footer">
            <div className="container">
                <div className='footer__container'>
                    <div className="footer__block-info">
                        <div className="footer__block">
                            <h2 className='footer__block-title'>Follow Us.</h2>
                            <p className='footer__block-text'>
                                We are always looking for new project and collaborations.
                                Feel free to contact us
                            </p>
                            <div className="footer__block-url">
                                <h3><ImFacebook/></h3>
                                <h3><FaTwitter/></h3>
                                <h3><BsInstagram/></h3>
                            </div>
                        </div>
                        <div className="footer__block">
                            <h2 className='footer__block-title'>Contact us.</h2>
                            <p className='footer__block-text'>
                                We are always looking for new project and collaborations.
                                Feel free to contact us
                            </p>
                            <div className="footer__block-phone">
                                <p>(408)996-1001</p>
                            </div>
                            <div className="footer__block-email">
                                <p><a href="mailto:support@clothes.com">@support@clothes.com </a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;