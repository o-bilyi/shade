import React, {Component} from 'react';

export default class Preload extends Component {

    constructor(props){
        super(props);
        this.state = {
            preloadShow : true
        };

        window.onload = () => {
            this.setState({
                preloadShow : false
            });
        }
    }

    render() {
        const preloadClass = this.state.preloadShow ? "preload" : "preload delete";
        return (
            <div className={preloadClass}>
                <span className="preloadText">
                    <span className="world">L</span>
                    <span className="world">o</span>
                    <span className="world">a</span>
                    <span className="world">d</span>
                    <span className="spin"></span>
                    <span className="spin"></span>
                    <span className="spin"></span>
                </span>
            </div>
        );
    }
}