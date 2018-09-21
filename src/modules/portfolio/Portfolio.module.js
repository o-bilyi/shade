import React from "react";
import Item from "./components/Item.component";
import Header from "shared/component/Header";
import Footer from "shared/component/Footer";
import Preload from "shared/component/Preload";
import {API, Fetch, scrollTo} from "utilits/index";
import PreviewsProject from "shared/component/PreviewProject";
import BottomMainForm from "shared/component/bottom-main-form";

export default class Portfolio extends React.Component {
	state = {
		projects : [],
		haveMore : true,
		nextCountItem : 4,
	};

	componentDidMount() {
		scrollTo();
		this._getProjects();
	}

	_getProjects = () => {
		Fetch(`${API}projects`).then(res => {
			if (res) {
				this.setState({
					projects : res,
				});
			}
		});
	};

	showMore = () => {
		this.setState({
			nextCountItem : this.state.nextCountItem + 4,
			haveMore : this.state.projects.length === this.state.nextCountItem,
		});
	};

	_getProjectsItems = () => {
		const {projects, nextCountItem} = this.state;
		return (
			<div className="flex-container">
				{projects.slice(0, nextCountItem).map((item, key) => <Item {...item} key={key}/>)}
			</div>);
	};

	render() {
		const {haveMore} = this.state;
		return (
			<div>
				<Header/>
				{
					this.state.projects.length
						? <main id="portfolio" className="wow animated fadeIn offset-section portfolio">
							<div className="contentMobileAnimate">
								<div className="top-main width-container">
									<h2 className="title-page">
										<strong className="crossed-out" children="роботи"/>
										<span children="Рішення для ваших ідей."/>
									</h2>
									{this._getProjectsItems()}
									{haveMore && <button className="more-project" onClick={this.showMore} children="Більше проектів"/>}
								</div>
								<BottomMainForm/>
							</div>
						</main>
						: <Preload/>
				}
				<Footer/>
				<PreviewsProject/>
			</div>);
	}
}
