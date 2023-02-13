import React, {useEffect, useState} from 'react';
import './footer.scss'

const Footer = () => {
const [hi, setHi] = useState(1)


    return (
        <footer className="footer">
            <div className='footer__container'>
                <div className="footer__block-info">
                    <div className='footer__block'>
                        <h2 className='footer__block-title'>Follow Us</h2>
                        <p className='footer__block-text'>
                            We are always looking for new project and collaborations.
                            Feel free to contact us
                        </p>
                    </div>
                    <div className='footer__block'>
                        <h2 className='footer__block-title'>Contact Us</h2>
                        <p className='footer__block-text'>
                            Park avenue, New-York, NY 31032
                        </p>
                        <p className='footer__block-phone'>
                            (408) 232-1000
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;