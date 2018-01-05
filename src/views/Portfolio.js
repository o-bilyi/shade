import React, {Component} from "react";
import {Link} from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import i18n from "i18n-react";
import Form from "../components/Form";

const projects = [
    {
        "animationClass": "wow animated fadeInUp projects",
        // "website": "http://www.rivoli-hotel.com",
        // "preview": "http://www.rivoli-hotel.com",
        "website": "http://rivoli.shade-designs.com.ua/",
        "preview": "http://rivoli.shade-designs.com.ua/",
        "img": "/img/main/rivoli.jpg",
        "altImg": "Rivoli",
        "nameProject": "Rivoli",
        "descriptionProject": "descriptionProjectRivoli",
    },
    {
        "animationClass": "wow animated fadeInUp projects",
        "website": "http://www.consult-group.com.ua/",
        "preview": "http://www.consult-group.com.ua/",
        "img": "/img/main/consult-group.jpg",
        "altImg": "Consult Group",
        "nameProject": "Consult Group",
        "descriptionProject": "descriptionProjectConsult_Group",
    },
    {
        "animationClass": "wow animated fadeInUp projects",
        "website": "http://www.movearoundprice.com/",
        "preview": "http://www.movearoundprice.com/",
        "img": "/img/main/rideIq.jpg",
        "altImg": "Ride IQ",
        "nameProject": "Ride IQ",
        "descriptionProject": "descriptionProjectRide_IQ"
    },
    {
        "animationClass": "wow animated fadeInUp projects",
        "website": "http://www.gazprom-neft.ru/",
        "preview": "http://www.gazprom-neft.ru/",
        "img": "/img/main/gazz.jpg",
        "altImg": "Gazprom neft",
        "nameProject": "Gazprom neft",
        "descriptionProject": "descriptionProjectGazprom_neft"
    },
    {
        "animationClass": "wow animated fadeInUp projects",
        "website": "http://www.smmcoffee.it/",
        "preview": "http://www.smmcoffee.it/",
        "img": "/img/main/coffee.jpg",
        "altImg": "SMM Shop",
        "nameProject": "SMM",
        "descriptionProject": "descriptionProjectSMM"
    },
    {
        "animationClass": "wow animated fadeInUp projects",
        "website": "http://www.advocate-grinchenko.com.ua/",
        "preview": "http://www.advocate-grinchenko.com.ua/",
        "img": "/img/main/advocate.jpg",
        "altImg": "Advocate",
        "nameProject": "Advocate",
        "descriptionProject": "descriptionProjectAdvocate"
    },
    {
        "animationClass": "wow animated fadeInUp projects",
        "website": "http://www.pg.deks.ua/",
        "preview": "http://www.pg.deks.ua/",
        "img": "/img/main/glass.jpg",
        "altImg": "Print Glass Furniture",
        "nameProject": "Print Glass",
        "descriptionProject": "descriptionProjectPrint_Glass_Furniture"
    },
    {
        "animationClass": "wow animated fadeInUp projects",
        "website": "http://www.promofinance.pl/",
        "preview": "http://www.promofinance.pl/",
        "img": "/img/main/PromoFinance.jpg",
        "altImg": "Promo Finance",
        "nameProject": "Promo Finance",
        "descriptionProject": "descriptionProjectPromo_Finance"
    }
];

export default class Portfolio extends Component {

    getProject = (item, key) => {
        let localizationDescription = "descriptionProject" + item.nameProject.replace(" ","_");
       return (
           <div className={item.animationClass} key={key} data-wow-duration="1.5s">
               <figure>
                   <Link to={item.website} target="_blank" rel="noopener noreferrer">
                       <img className="item-img" src={item.img} alt={item.altImg}/></Link>
                   <figcaption>
                       <div className="left">
                           <h2 className="title-project">{item.nameProject}</h2>
                           <i18n.text className="description-project" tag="p" text={{key: localizationDescription}}/>
                       </div>
                       <div className="right">
                           <Link to={item.website} target="_blank" rel="noopener noreferrer"
                                 className="small-btn website">
                               <i18n.text tag="span" text={{key: "website"}}/>
                           </Link>
                           <Link to={item.preview} target="_blank" rel="noopener noreferrer"
                                 className="small-btn preview">
                               <i18n.text tag="span" text={{key: "preview"}}/>
                           </Link>
                       </div>
                   </figcaption>
               </figure>
           </div>
       );
    };

    render() {
        return (
            <div>
                <Header/>
                <main id="portfolio" className="offset-section portfolio wow animated fadeIn" data-wow-duration="1.5s">
                    <div className="contentMobileAnimate">
                        <div className="top-main width-container">
                            <h2 className="title-page"><strong>Works.</strong> Solutions for your ideas</h2>
                            <div className="flex-container">
                                {projects.map(this.getProject)}
                                <button className="more-project"><i18n.text tag="span" text={{key: "more-projects"}}/></button>
                            </div>
                        </div>
                        <div className="bottom-main">
                            <div className="width-container">
                                <div className="form-container">
                                    <h2 className="title-form">U’VE LIKED OUR WORKS. get in touch</h2>
                                    <Form/>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
                <Footer/>
            </div>
        )
    }
}