import React, {Component} from "react";
import {Link} from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import i18n from "i18n-react";
import BottomMainForm from "../components/bottom-main-form";

const blog = [
    {
        "blogImg": "/img/main/blog-img.jpg",
        "blogTitleH2": "Article first",
        "blogTitleSpan": "identity, inspiration",
        "blogDescription": "Lorem ipsum dolor sit amet, consectetur adipisicing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamcolaboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in",
        "animateClass": "wow animated fadeIn item",
        "learnMore": "https://reactjs.org/"
    },
    {
        "blogImg": "/img/main/blog-img.jpg",
        "blogTitleH2": "Article Second",
        "blogTitleSpan": "identity, inspiration",
        "blogDescription": "Lorem ipsum dolor sit amet, consectetur adipisicing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamcolaboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in",
        "animateClass": "wow animated fadeIn item",
        "learnMore": "https://reactjs.org/"
    },
    {
        "blogImg": "/img/main/blog-img.jpg",
        "blogTitleH2": "Article three",
        "blogTitleSpan": "identity, inspiration",
        "blogDescription": "Lorem ipsum dolor sit amet, consectetur adipisicing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamcolaboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in",
        "animateClass": "wow animated fadeIn item",
        "learnMore": "https://reactjs.org/"
    },
    {
        "blogImg": "/img/main/blog-img.jpg",
        "blogTitleH2": "Article four",
        "blogTitleSpan": "identity, inspiration",
        "blogDescription": "Lorem ipsum dolor sit amet, consectetur adipisicing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamcolaboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in",
        "animateClass": "wow animated fadeIn item",
        "learnMore": "https://reactjs.org/"
    }
];

export default class Blog extends Component {
    getArticles = (item, key) => {
        let localizationDescription = "blogDescription" + item.blogTitleH2.replace(" ","_");
        let localizationTitleSpan = "blogTitleSpan" + item.blogTitleH2.replace(" ","_");
        return (
            <div className={item.animateClass} key={key}>
                <div className="blog-img">
                    <img src={item.blogImg} alt="text"/>
                </div>
                <div className="blog-title">
                    <h2>{item.blogTitleH2}</h2>
                    <i18n.span text={{key: localizationTitleSpan}}/>
                </div>
                <div className="blog-description">
                    <i18n.p text={{key: localizationDescription}}/>
                </div>
                <Link to={item.learnMore} target="_blank" rel="noopener noreferrer"
                      className="learn-more">
                    <i18n.span text={{key: "lear-more"}}/>
                </Link>
            </div>
        );
    };

    render() {
        return (
            <div className="ContactUs">
                <Header/>
                <section className="offset-section contentMobileAnimate">
                    <div data-wow-duration="1.5s" className="wow animated fadeInDown title-blog-container">
						<h2 className="title-page">
							<i18n.text className="crossed-out" tag="strong" text={{ key: "blog" }}/>
							<i18n.span text={{ key: "fromDesigners" }}/>
						</h2>
                    </div>
                    <main className="width-container">
                        <section data-wow-offset="100" data-wow-duration="1.5s"
                                 className="wow animated fadeInUp blog-container">
                            {blog.map(this.getArticles)}
                            <button className="more-project">
                                <i18n.p text={{key: "more-articles"}}/>
                            </button>
                        </section>
                    </main>
					<BottomMainForm/>
                </section>
                <Footer/>
            </div>
        )
    }
}
