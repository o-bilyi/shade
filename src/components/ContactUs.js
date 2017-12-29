import React, { Component } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Form from './Form';
import i18n from 'i18n-react';


export default class ContactUs extends Component {
    render() {
        return (
            <div className='ContactUs'>
                <Header/>
                <main className="wow animated fadeIn contact contentMobileAnimate" data-wow-duration="1.5s">
                    <div data-wow-offset="100" data-wow-duration="1.5s" className="wow animated fadeInDown title-page">
                        <i18n.text tag="h2" text={{ key: "contact-us" }}/>
                        <i18n.span text={{ key: "suitable-manner" }}/>
                    </div>
                    <section data-wow-offset="100" data-wow-duration="1.5s" className="wow animated fadeInUp form-contact">
                        <div className="left">
                            <div className="mail-us">
                                <div className="img-container">
                                    <img src="/img/main/mail-2-white.png" alt="mail-icon"/>
                                </div>
                                <div className="mail-container">
                                    <i18n.span text={{ key: "mail-us" }}/>
                                    <a href="mailto:shade-designs@com">shade-designs@com</a>
                                </div>
                            </div>
                            <div className="phone-us">
                                <div className="img-container">
                                    <img src="img/main/domestic-phone-white.png" alt="phone-icon"/>
                                </div>
                                <div className="phone-container">
                                    <i18n.span text={{ key: "phone-us" }}/>
                                    <p><a href="tel:+38 (066) 756 90 93">+38 (066) 756 90 93</a></p>
                                    <p><a href="tel:+38 (095) 33 97 495">+38 (095) 33 97 495</a></p>
                                </div>
                            </div>
                        </div>
                        <div className="right">
                            <Form/>
                        </div>
                    </section>
                    <div className="have-nice-day">
                        <h3 className="text3">Have a nice day! :)</h3>
                    </div>
                </main>
                <Footer/>
            </div>
        )
    }
}