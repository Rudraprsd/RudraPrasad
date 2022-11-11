import React from 'react';
import "D:/coding/Website project/personal_portfolios_all/React portfolio/my-app/src/components/services/services.css";

const Projects = () => {
    return (
        <section className="services section" id="services">
            <h2 className="section__title">Projects</h2>
            <span className="section__subtitle">Made by me</span>

            <div className="services__container container grid">
                <div className="services__content">
                    <div>
                        <h3 className="services__title">IISERBPR Clone</h3>
                    </div>

                    <span className="services__button"><a style={{textDecoration: 'none'}} href="https://rudraprasad31.github.io/iiserbprclone.github.io/index.html" target="_blank" >View More</a> <i className="uil uil-arrow-right services__button-icon"></i></span>
                </div>
                <div className="services__content">
                    <div>
                        <h3 className="services__title">Digital Marketing</h3>
                    </div>

                    <span className="services__button"><a style={{textDecoration: 'none'}} href="https://rudraprasad31.github.io/Rudradigital.github.io/" target="_blank" >View More</a> <i className="uil uil-arrow-right services__button-icon"></i></span>
                </div>
                <div className="services__content">
                    <div>
                        <h3 className="services__title">Strawberry King</h3>
                    </div>

                    <span className="services__button"><a style={{textDecoration: 'none'}} href="https://github.com/Rudraprsd/strawberry_king" target="_blank" >View More</a> <i className="uil uil-arrow-right services__button-icon"></i></span>
                </div>
                <div className="services__content">
                    <div>
                        <h3 className="services__title">Animated Text</h3>
                    </div>

                    <span className="services__button"><a style={{textDecoration: 'none'}} href="https://github.com/Rudraprsd/animated_text" target="_blank" >View More</a> <i className="uil uil-arrow-right services__button-icon"></i></span>
                </div>
                <div className="services__content">
                    <div>
                        <h3 className="services__title">Adidas Animation</h3>
                    </div>

                    <span className="services__button"><a style={{textDecoration: 'none'}} href="https://github.com/Rudraprsd/adidas_animation" target="_blank" >View More</a> <i className="uil uil-arrow-right services__button-icon"></i></span>
                </div>
                <div className="services__content">
                    <div>
                        <h3 className="services__title">Restaurant</h3>
                    </div>

                    <span className="services__button"><a style={{textDecoration: 'none'}} href="https://rudraprasad31.github.io/our_cuisine/" target="_blank" >View More</a> <i className="uil uil-arrow-right services__button-icon"></i></span>
                </div>
                
            </div>
        </section>

    )
}

export default Projects ;