import React from 'react';

const Contact = () => {
    return ( 
        <section className="contact section" id="contact">
            <h2 className="section__title">Get in touch</h2>
            <span className="section__subtitle">Contact Me</span>

            <div className="contact__container container grid">
                <div className="contact__content">
                    <h3 className="contact__title">Talk to Me</h3>
                </div>

                <div className="contact__info">
                    <div className="contact__card">
                        <i className="bx bx contact__card-icon"></i>

                        <h3 className="contact__card-title">Email</h3>
                        <span className="contact__card-data">srudra3110@gmail.com</span>

                        <a href="mailto:srudra3110@gmail.com" className="contact__button">Write Me {" "} <i className="bx bx-right-arrow-alt contact__button-icon"></i></a>
                    </div>
                    <div className="contact__card">
                        <i className="bx bx contact__card-icon"></i>

                        <h3 className="contact__card-title">Email</h3>
                        <span className="contact__card-data">srudra3110@gmail.com</span>

                        <a href="mailto:srudra3110@gmail.com" className="contact__button">Write Me {" "} <i className="bx bx-right-arrow-alt contact__button-icon"></i></a>
                    </div>
                    <div className="contact__card">
                        <i className="bx bx contact__card-icon"></i>

                        <h3 className="contact__card-title">Email</h3>
                        <span className="contact__card-data">srudra3110@gmail.com</span>

                        <a href="mailto:srudra3110@gmail.com" className="contact__button">Write Me {" "} <i className="bx bx-right-arrow-alt contact__button-icon"></i></a>
                    </div>
                    
                </div>

                <div className="contact__content">
                    <h3 className="contact__title">Write me Your Project</h3>
                </div>
            </div>
        </section>
     );
}
 
export default Contact;