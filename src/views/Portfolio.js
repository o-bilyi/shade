import React, {Component} from "react";
import {Link} from "react-router-dom";
import i18n from "i18n-react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import BottomMainForm from "../components/bottom-main-form";
import PreviewsProject from "../components/PreviewProject";

const projects = [
	{
		"animationClass" : "wow animated fadeInUp projects",
		// "website": "http://www.rivoli-hotel.com",
		// "preview": "http://www.rivoli-hotel.com",
		"website" : "http://rivoli.shade-design.com.ua/",
		"preview" : "/img/preview-projects/rivoli.jpg",
		"img" : "/img/main/rivoli.jpg",
		"altImg" : "Rivoli",
		"nameProject" : "Rivoli",
		"descriptionProject" : "descriptionProjectRivoli",
	},
	{
		"animationClass" : "wow animated fadeInUp projects",
		"website" : "http://www.consult-group.com.ua/",
		"preview" : "/img/preview-projects/consult_group.jpg",
		"img" : "/img/main/consult-group.jpg",
		"altImg" : "Consult Group",
		"nameProject" : "Consult Group",
		"descriptionProject" : "descriptionProjectConsult_Group",
	},
	{
		"animationClass" : "wow animated fadeInUp projects",
		"website" : "http://www.movearoundprice.com/",
		"preview" : "/img/preview-projects/rideIq.jpg",
		"img" : "/img/main/rideIq.jpg",
		"altImg" : "Ride IQ",
		"nameProject" : "Ride IQ",
		"descriptionProject" : "descriptionProjectRide_IQ"
	},
	{
		"animationClass" : "wow animated fadeInUp projects",
		"website" : "http://www.gazprom-neft.ru/",
		"preview" : "/img/preview-projects/gaz_prom.jpg",
		"img" : "/img/main/gazz.jpg",
		"altImg" : "Gazprom neft",
		"nameProject" : "Gazprom neft",
		"descriptionProject" : "descriptionProjectGazprom_neft"
	},
	{
		"animationClass" : "wow animated fadeInUp projects",
		"website" : "http://www.smmcoffee.it/",
		"preview" : "/img/preview-projects/smm_page.jpg",
		"img" : "/img/main/coffee.jpg",
		"altImg" : "SMM Shop",
		"nameProject" : "SMM",
		"descriptionProject" : "descriptionProjectSMM"
	},
	{
		"animationClass" : "wow animated fadeInUp projects",
		"website" : "http://www.advocate-grinchenko.com.ua/",
		"preview" : "/img/preview-projects/smm_page.jpg",
		"img" : "/img/main/advocate.jpg",
		"altImg" : "Advocate",
		"nameProject" : "Advocate",
		"descriptionProject" : "descriptionProjectAdvocate"
	},
	{
		"animationClass" : "wow animated fadeInUp projects",
		"website" : "http://www.pg.deks.ua/",
		"preview" : "/img/preview-projects/deks.jpg,",
		"img" : "/img/main/glass.jpg",
		"altImg" : "Print Glass Furniture",
		"nameProject" : "Print Glass",
		"descriptionProject" : "descriptionProjectPrint_Glass_Furniture"
	},
	{
		"animationClass" : "wow animated fadeInUp projects",
		"website" : "http://www.promofinance.pl/",
		"preview" : "/img/preview-projects/smm_page.jpg",
		"img" : "/img/main/PromoFinance.jpg",
		"altImg" : "Promo Finance",
		"nameProject" : "Promo Finance",
		"descriptionProject" : "descriptionProjectPromo_Finance"
	},
	{
		"animationClass" : "wow animated fadeInUp projects",
		"website" : "http://eliteauto.shade-design.com.ua/",
		"preview" : "/img/preview-projects/promo.jpg",
		"img" : "/img/main/eliteAuto.jpg",
		"altImg" : "Elite Auto",
		"nameProject" : "Elite Auto",
		"descriptionProject" : "descriptionProjectElite_Auto"
	}
];

const newPreviewProject = new CustomEvent("preview");

export default class Portfolio extends Component {

	changePreviewProject = (newPreview, newNameProject) => {
		newPreviewProject.newPreview = newPreview;
		newPreviewProject.newNameProject = newNameProject;
		document.dispatchEvent(newPreviewProject);
	};

	getProject = (item, key) => {
		const localizationDescription = "descriptionProject" + item.nameProject.replace(" ", "_");
		return (
			<div className={item.animationClass} key={key} data-wow-duration="1.5s">
				<figure>
					<Link to={item.website} target="_blank">
						<img className="item-img" src={item.img} alt={item.altImg}/></Link>
					<figcaption>
						<div className="left">
							<h2 className="title-project">{item.nameProject}</h2>
							<i18n.text className="description-project" tag="p" text={{key : localizationDescription}}/>
						</div>
						<div className="right">
							<Link to={item.website} target="_blank"
								  className="small-btn website">
								<i18n.text tag="span" text={{key : "website"}}/>
							</Link>
							<button className="small-btn preview"
								onClick={() => this.changePreviewProject(item.preview, item.nameProject)}>
								<i18n.text tag="span" text={{key : "preview"}}/>
							</button>
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
				<main id="portfolio" className="wow animated fadeIn offset-section portfolio">
					<div className="contentMobileAnimate">
						<div className="top-main width-container">
							<h2 className="title-page">
								<i18n.text className="crossed-out" tag="strong" text={{key : "works"}}/>
								<i18n.span text={{key : "solutionsForYourIdeas"}}/>
							</h2>
							<div className="flex-container">
								{projects.map(this.getProject)}
							</div>
							<button className="more-project">
								<i18n.text tag="span" text={{key : "more-projects"}}/>
							</button>
						</div>
						<BottomMainForm/>
					</div>
				</main>
				<Footer/>
				<PreviewsProject/>
			</div>
		);
	}
}
