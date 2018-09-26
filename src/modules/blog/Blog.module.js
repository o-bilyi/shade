import React from "react";
import {Link} from "react-router-dom";
import Header from "shared/component/Header";
import Footer from "shared/component/Footer";
import BottomMainForm from "shared/component/bottom-main-form.component";

const blogModule = [
	{
		"blogImg" : "/img/main/blogModule-img.jpg",
		"blogTitleH2" : "Article first",
		"blogTitleSpan" : "identity, inspiration",
		"blogDescription" : "Lorem ipsum dolor sit amet, consectetur adipisicing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamcolaboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in",
		"animateClass" : "wow animated fadeIn item",
		"learnMore" : "https://reactjs.org/",
	},
	{
		"blogImg" : "/img/main/blogModule-img.jpg",
		"blogTitleH2" : "Article Second",
		"blogTitleSpan" : "identity, inspiration",
		"blogDescription" : "Lorem ipsum dolor sit amet, consectetur adipisicing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamcolaboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in",
		"animateClass" : "wow animated fadeIn item",
		"learnMore" : "https://reactjs.org/",
	},
	{
		"blogImg" : "/img/main/blogModule-img.jpg",
		"blogTitleH2" : "Article three",
		"blogTitleSpan" : "identity, inspiration",
		"blogDescription" : "Lorem ipsum dolor sit amet, consectetur adipisicing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamcolaboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in",
		"animateClass" : "wow animated fadeIn item",
		"learnMore" : "https://reactjs.org/",
	},
	{
		"blogImg" : "/img/main/blogModule-img.jpg",
		"blogTitleH2" : "Article four",
		"blogTitleSpan" : "identity, inspiration",
		"blogDescription" : "Lorem ipsum dolor sit amet, consectetur adipisicing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamcolaboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in",
		"animateClass" : "wow animated fadeIn item",
		"learnMore" : "https://reactjs.org/",
	},
	{
		"blogImg" : "/img/main/blogModule-img.jpg",
		"blogTitleH2" : "Article first",
		"blogTitleSpan" : "identity, inspiration",
		"blogDescription" : "Lorem ipsum dolor sit amet, consectetur adipisicing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamcolaboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in",
		"animateClass" : "wow animated fadeIn item",
		"learnMore" : "https://reactjs.org/",
	},
	{
		"blogImg" : "/img/main/blogModule-img.jpg",
		"blogTitleH2" : "Article Second",
		"blogTitleSpan" : "identity, inspiration",
		"blogDescription" : "Lorem ipsum dolor sit amet, consectetur adipisicing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamcolaboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in",
		"animateClass" : "wow animated fadeIn item",
		"learnMore" : "https://reactjs.org/",
	},
	{
		"blogImg" : "/img/main/blogModule-img.jpg",
		"blogTitleH2" : "Article three",
		"blogTitleSpan" : "identity, inspiration",
		"blogDescription" : "Lorem ipsum dolor sit amet, consectetur adipisicing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamcolaboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in",
		"animateClass" : "wow animated fadeIn item",
		"learnMore" : "https://reactjs.org/",
	},
	{
		"blogImg" : "/img/main/blogModule-img.jpg",
		"blogTitleH2" : "Article four",
		"blogTitleSpan" : "identity, inspiration",
		"blogDescription" : "Lorem ipsum dolor sit amet, consectetur adipisicing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamcolaboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in",
		"animateClass" : "wow animated fadeIn item",
		"learnMore" : "https://reactjs.org/",
	},
];

export default class Blog extends React.PureComponent {
	state = {
		blogItems : blogModule.slice(0, 4),
		haveMore : blogModule.length > 4,
	};

	getArticles = (item, key) => {
		return (
			<div className={item.animateClass} key={key}>
				<div className="blog-img">
					<img src={item.blogImg} alt="text"/>
				</div>
				<div className="blog-title">
					<h2>{item.blogTitleH2}</h2>
					<span children={item.blogTitleSpan}/>
				</div>
				<div className="blog-description">
					<span children={item.blogDescription}/>
				</div>
				<Link
					to={item.learnMore} target="_blank"
					rel="noopener noreferrer"
					className="learn-more">Детальніше</Link>
			</div>
		);
	};

	showMore = () => {
		const currentItem = this.state.blogItems;
		const newItem = currentItem.concat(blogModule.slice(currentItem.length, currentItem.length + 4));
		this.setState({
			blogItems : newItem,
			haveMore : newItem.length !== blogModule.length,
		});
	};

	render() {
		const {blogItems, haveMore} = this.state;
		return (
			<div className="ContactUs">
				<Header/>
				<section className="offset-section contentMobileAnimate">
					<div data-wow-duration="1.5s" className="wow animated fadeInDown title-blog-container">
						<h2 className="title-page">
							<strong className="crossed-out" children="блог"/>
							<span children="Від дизайнерів для дизайнерів"/>
						</h2>
					</div>
					<main className="width-container">
						<section data-wow-offset="100" data-wow-duration="1.5s"
										 className="wow animated fadeInUp blog-container">
							{blogItems.map(this.getArticles)}

							{haveMore && <button
								className="more-project"
								onClick={this.showMore}
								children="Більше статтей"/>}
						</section>
					</main>
					<BottomMainForm/>
				</section>
				<Footer/>
			</div>
		);
	}
}
