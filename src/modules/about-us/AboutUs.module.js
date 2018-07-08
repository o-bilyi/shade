import React from 'react';
import Item from './components/Item.component';
import {Fetch, scrollTo} from '../../utilits/index';
import Header from '../../shared-components/Header';
import Footer from '../../shared-components/Footer';
import Preload from '../../shared-components/Preload';
import BottomMainForm from '../../shared-components/bottom-main-form';

export default class AboutUs extends React.PureComponent {
	state = {
		items: []
	};

	componentDidMount() {
		scrollTo();

		Fetch('/api/users')
		.then(res => {
			if(res) {
        this.setState({
          items: res
        });
			}
		})
	}

	_getItems = () => {
    return this.state.items.map((item, key) => <Item {...item} key={key}/>);
	};

	render() {
		return (
			<div className="AboutUs">
				<Header/>
				{
					this.state.items.length
					? <div className="offset-section contentMobileAnimate">
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
                  {this._getItems()}
                </section>
              </main>
              <BottomMainForm/>
            </div>
					:	<Preload/>
				}
				<Footer/>
			</div>
		);
	};
}
