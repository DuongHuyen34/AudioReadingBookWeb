import React from 'react';
import { useLanguage } from '../../hooks/useLanguage';
import { texts } from '../../locales/texts';
import footerBg from '../../assets/Bg_Login.jpg';
import phoneIcon from '../../assets/icons/phone.jpg';
import emailIcon from '../../assets/icons/mail.png';
import locationIcon from '../../assets/icons/map.png';
import logoSale from '../../assets/icons/logoSale.png';
import { FaFacebookSquare, FaInstagram, FaYoutube } from "react-icons/fa";
import './Footer.css';

function Footer() {
    const { lang } = useLanguage();

    const t = texts[lang];

    return (
        <footer className="footer" style={{ '--footer-bg': `url(${footerBg})` }}>
            <div className='footer-hd'>
                <h2 className='footer-hd-subtitle'>{t.footer.subtitle}</h2>
                <h1 className='footer-hd-title'>{t.footer.title}</h1>
            </div>
            <div className="footer-container">
                {/* Về READIO */}
                <div className="footer-section">
                    <h3 className="footer-title">{t.footer.readio}</h3>
                    <p className="footer-description">{t.footer.descript}</p>
                    <img src={logoSale} alt='logoBCT' className='footer-images' />
                </div>

                {/* Links nhanh */}
                <div className="footer-section">
                    <h3 className="footer-title">{t.footer.link}</h3>
                    <ul className="footer-links">
                        <li><a href="/readio-plus">{t.footer.list1}</a></li>
                        <li><a href="/readio-audio">{t.footer.list2}</a></li>
                        <li><a href="/ecosystem">{t.footer.list3}</a></li>
                        <li><a href="/system">{t.footer.list4}</a></li>
                        <li><a href="/terms">{t.footer.list5}</a></li>
                        <li><a href="/privacy">{t.footer.list6}</a></li>
                    </ul>
                </div>

                {/* Theo dõi chúng tôi */}
                <div className="footer-section">
                    <h3 className="footer-title">{t.footer.follow}</h3>
                    <ul className="footer-links">
                        <li><a href="https://facebook.com">
                            <FaFacebookSquare className='footer-links-icon' />
                            <span>Facebook</span>
                        </a></li>
                        <li><a href="https://instagram.com">
                            <FaInstagram className='footer-links-icon' />
                            <span>Instagram</span>
                        </a></li>
                        <li><a href="https://youtube.com">
                            <FaYoutube className='footer-links-icon' />
                            <span>Youtube</span>
                        </a></li>
                    </ul>
                </div>

                {/* Liên hệ */}
                <div className="footer-section">
                    <h3 className="footer-title">{t.footer.contact}</h3>
                    <div className="contact-info">
                        <div className="contact-item">
                            <img src={phoneIcon} alt="Phone" className="contact-icon" />
                            <span>19008386</span>
                        </div>
                        <div className="contact-item">
                            <img src={emailIcon} alt="Email" className="contact-icon" />
                            <span>hotro@readio.vn</span>
                        </div>
                        <div className="contact-item">
                            <img src={locationIcon} alt="Location" className="contact-icon" />
                            <span>{t.footer.address}</span>
                        </div>
                    </div>
                </div>

            </div>

            {/* Copyright */}
            <div className="footer-bottom">
                <p>{t.footer.footer}</p>
            </div>
        </footer>
    );
}

export default Footer;