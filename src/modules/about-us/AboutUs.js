import React from "react";
import {scrollTo} from '../../utilits/index';
import Header from "../../shared-components/Header";
import Footer from "../../shared-components/Footer";
import FindUs from "../../shared-components/FindUs";
import BottomMainForm from "../../shared-components/bottom-main-form";

const itemsDefault = [
	{
		id: 1528873607402,
		name: 'ELITE AUTO',
		link: 'www.eliteauto.com.ua',
		img: '1528873607406-eliteAuto.jpg',
		previewImg: '1528873607419-eliteAuto.jpg',
	}, {
		id: 1528913526367,
		name: 'Rivoli',
		link: 'http://rivoli.shade-design.com.ua/',
		img: '1528913526369-rivoli.jpg',
		previewImg: '1528913526385-rivoli.jpg',
	}, {
		id: 1528913631035,
		name: 'Consult Group',
		link: 'http://www.consult-group.com.ua/',
		img: '1528913631037-consult-group.jpg',
		previewImg: '1528913631104-consult_group.jpg',
	}, {
		id: 1528913800831,
		name: 'Газпром нефть',
		link: 'http://www.gazprom-neft.ru/',
		img: '1528913800833-gazz.jpg',
		previewImg: '1528913800853-gaz_prom.jpg',
	},
	{
		id: 1528913526367,
		name: 'Rivoli',
		link: 'http://rivoli.shade-design.com.ua/',
		img: '1528913526369-rivoli.jpg',
		previewImg: '1528913526385-rivoli.jpg',
	}, {
		id: 1528913631035,
		name: 'Consult Group',
		link: 'http://www.consult-group.com.ua/',
		img: '1528913631037-consult-group.jpg',
		previewImg: '1528913631104-consult_group.jpg',
	}, {
		id: 1528913800831,
		name: 'Газпром нефть',
		link: 'http://www.gazprom-neft.ru/',
		img: '1528913800833-gazz.jpg',
		previewImg: '1528913800853-gaz_prom.jpg',
	},
];

const team = [
    {
        "userImg": "/img/main/ui-ux-designer.png",
        "userName": "Serhii Henyk",
        "userTitleSpan": "UI/UX designer",
        "userDescription": "Напрямок та дизайн мистецтва Визначте креативне бачення та залучення концепцій для створення інтерактивного дизайну Створення міцних дизайнерських рішень, які відповідають стратегічним цілям бізнесу Наставник, лідер, і надихає дизайнерів вигадувати інноваційні ідеї Досягти стратегічних цілей за допомогою дизайну . Маю міцне розуміння досвіду користувачів Управління кілька проектів Вирішіть бізнес-проблеми",
        "userSocialFacebook": "https://www.facebook.com/serhii.henyk",
        "userSocialLinkedin": "https://www.linkedin.com/in/serhii.henyk",
        "animateClass":"wow animated fadeInLeft user-box"
	},
    {
        "userImg": "/img/main/web-dev.png",
        "userName": "Oleksandr Bilyi",
        "userTitleSpan": "Front-end-developer",
        "userDescription": "Високо винахідливий, інноваційний розробник Front-End з досвідом компонування дизайну та кодування веб-сайтів.",
        "userSocialFacebook": "https://www.facebook.com/sasha.beluy.56",
        "userSocialLinkedin": "https://www.linkedin.com/in/olexander-bilyi-83156b10a/",
        "animateClass":"wow animated fadeInRight user-box"
	}
];

export default class AboutUs extends React.PureComponent {
	componentDidMount(){
		scrollTo();
	}
    getUsers = (item, key) => {
        return (
            <div className={item.animateClass} key={key}>
                <div className="user-head">
                    <div className="user-img">
                        <img src={item.userImg} alt="text"/>
                    </div>
                    <div className="user-title">
                        <h2>{item.userName}</h2>
                        <span>{item.userTitleSpan}</span>
                    </div>
                </div>
                <div className="user-body">
                    <div className="user-description" children={item.userDescription}/>
                    <FindUs
                        facebook={item.userSocialFacebook}
                        linkedin={item.userSocialLinkedin}
                    />
                </div>
            </div>
        );
    };
    render() {
        return (
            <div className="AboutUs">
                <Header/>
                <div className="offset-section contentMobileAnimate">
                    <div data-wow-duration="1.5s" className="wow animated fadeInDown title-about-container">
                        <h2 className="title-page">
                            <span className="crossed-out" children="про нас"/>
                            <span children="Команда, натхненна дизайном"/>
                        </h2>
                        <p className="description" children="Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                         sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                          nisi ut aliquip ex ea commodo consequat."/>
                    </div>
                    <main data-wow-offset="100" data-wow-duration="1.5s" className="wow animated fadeInUp about-container">
                        <section className="wow animated fadeIn user-container">
                            {team.map(this.getUsers)}
                        </section>
                    </main>
					<BottomMainForm/>
                </div>
                <Footer/>
            </div>
        );
    };
}
