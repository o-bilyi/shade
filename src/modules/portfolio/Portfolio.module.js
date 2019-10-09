import React from "react";
import {db} from "../../db";
import {scrollTo} from "utilits/index";
import Item from "./components/Item.component";
import Preload from "shared/component/Preload.component";
import Wrapper from "../../shared/component/Wrapper.component";
import PreviewsProject from "shared/component/PreviewProject.component";
import TitleAndDescriptionPage from "shared/component/TitleAndDescriptionPage.component";

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
		db.ref("/projects").once("value").then(snapshot => {
			this.setState({
				projects : snapshot.val(),
			});
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

	_getContent = () =>{
		if (this.state.projects.length) {
			const {haveMore} = this.state;
			return (
				<div className="width-container">

					{<TitleAndDescriptionPage pageName="projectsPage"/>}

					{this._getProjectsItems()}
					{haveMore && <button className="more-project" onClick={this.showMore} children="Більше проектів"/>}
				</div>
			);
		}
		return <Preload/>;
	}

	render() {
		return (
			<Wrapper pageName="portfolio" classNames="portfolio">
				{ this._getContent() }
				<PreviewsProject/>
			</Wrapper>
		);
	}
}
