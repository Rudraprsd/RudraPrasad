import React from 'react';
import "./footer.css";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__container container">
                <h1 className="footer__title">Rudra Prasad Sahu</h1>

                <ul className="footer__list">
                    <li>
                        <a href="#about" className="footer__link">About</a>
                    </li>
                    <li>
                        <a href="#skills" className="footer__link">Skills</a>
                    </li>
                    <li>
                        <a href="#qualification" className="footer__link">Qualification</a>
                    </li>
                </ul>

                <div className="footer__social">
                    <a href="https://www.instagram.com/rudra.prasad_/" className="footer__social-link" target="_blank">
                        <i class="bx bxl-instagram"></i>
                    </a>
                    <a href="https://www.linkedin.com/in/rudra-prasad-sahu-631227226/" className="footer__social-link" target="_blank">
                        <i class="bx bxl-linkedin"></i>
                    </a>
                    <a href="https://github.com/Rudraprsd" className="footer__social-link" target="_blank">
                        <i class="bx bxl-github"></i>
                    </a>
                </div>

                <span className="footer__copy">
                    &#169; Rudra Prasad Sahu. All rights reserved
                </span>
            </div>
        </footer>
    );
}

export default Footer;