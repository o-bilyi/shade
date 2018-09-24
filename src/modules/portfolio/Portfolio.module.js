import React from "react";
import Item from "./components/Item.component";
import Header from "shared/component/Header";
import Footer from "shared/component/Footer";
import Preload from "shared/component/Preload";
import {API, Fetch, scrollTo} from "utilits/index";
import PreviewsProject from "shared/component/PreviewProject";
import BottomMainForm from "shared/component/bottom-main-form";
import TitleAndDescriptionPage from "shared/component/TitleAndDescriptionPage.component";

export default class Portfolio extends React.Component {
	state = {
		projects : [],
		haveMore : true,
		nextCountItem : 4,
		titleAndDescription : [],
	};

	componentDidMount() {
		scrollTo();
		this._getProjects();
	}

	_getProjects = () => {
		Promise.all([
			Fetch(`${API}projects`).then(res => {
				if (res) {
					this.setState({
						projects : res,
					});
				}
			}),
			Fetch(`${API}projects-text`).then(res => {
				if (res) {
					this.setState({
						titleAndDescription : res,
					});
				}
			})
		]);
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
						? <main id="portfolio" className="offset-section portfolio">
							<div className="contentMobileAnimate">
								<div className="width-container">

									{
										<TitleAndDescriptionPage titleAndDescription={this.state.titleAndDescription}/>
									}

									{
										this._getProjectsItems()
									}
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
