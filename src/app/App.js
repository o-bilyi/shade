import React, {Component} from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import {Switch, Route, Redirect} from 'react-router';

import $ from 'jquery';
import WOW from 'wowjs';
import i18n from 'i18n-react';

import Home from '../components/Home'
import Portfolio from "../components/Portfolio";
import AboutUs from "../components/AboutUs";
import ContactUs from "../components/ContactUs";
import Blog from "../components/Blog";
import Preload from "../components/Preload";
import Feedback from '../components/Modal';
import ShowPopup from '../components/ShowPopup';
import PopupLan from '../components/PopupLan';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            language: 'en'
        };
        let setLanStorage = localStorage.getItem('language');
        if(setLanStorage){
            this.setLang(setLanStorage);
        }else {
            this.setLang(this.state.language);
        }
    }

    componentDidMount() {
        this.initWow();
        this.initChangeText();
        document.addEventListener('changeLang',this.toggleLang);
    }

    setLang = (newLan) =>{
        let lang = require(`../components/${newLan}.json`);
        i18n.setTexts(lang);
    };

    toggleLang = (lan) => {
        if(typeof (lan) === 'object'){
            lan = lan.detail.newLan;
        }
        this.setLang(lan);
        this.setState({language: lan});
        localStorage.setItem('language',lan);
    };

    initChangeText = () =>{
        /*set text ============================*/
        class TextScramble {
            constructor(el) {
                this.el = el;
                // this.chars = '!<>-_\\/[]{}—=+*^?#________';
                // this.chars = '!<>-_\\/[]{}—=+*^?#';
                this.chars = 'wafsgxcsdc';
                this.update = this.update.bind(this)
            }

            setText(newText) {
                let oldText;
                if (this.el !== null) {
                    oldText = this.el.innerText;

                    const length = Math.max(oldText.length, newText.length);
                    const promise = new Promise((resolve) => this.resolve = resolve);
                    this.queue = [];
                    for (let i = 0; i < length; i++) {
                        const from = oldText[i] || '';
                        const to = newText[i] || '';
                        const start = Math.floor(Math.random() * 40);
                        const end = start + Math.floor(Math.random() * 40);
                        this.queue.push({from, to, start, end})
                    }
                    cancelAnimationFrame(this.frameRequest);
                    this.frame = 0;
                    this.update();
                    return promise
                }
                else {
                    return false
                }
            }

            update() {
                let output = '';
                let complete = 0;
                for (let i = 0, n = this.queue.length; i < n; i++) {
                    let {from, to, start, end, char} = this.queue[i];
                    if (this.frame >= end) {
                        complete++;
                        output += to
                    } else if (this.frame >= start) {
                        if (!char || Math.random() < 0.28) {
                            char = this.randomChar();
                            this.queue[i].char = char
                        }
                        output += `<span class="dud">${char}</span>`
                    } else {
                        output += from
                    }
                }
                this.el.innerHTML = output;
                if (complete === this.queue.length) {
                    this.resolve()
                } else {
                    this.frameRequest = requestAnimationFrame(this.update);
                    this.frame++
                }
            }

            randomChar() {
                return this.chars[Math.floor(Math.random() * this.chars.length)]
            }
        }
        const phrases = [
            'we design to'
            // '<i18n.p text={{ key: "we-design-to" }}'
        ];
        const phrases2 = [
            'in it solutions'
            // 'in-it-solutions'
        ];
        const phrases3 = [
            'Have a nice day! :)'
        ];
        const el = document.querySelector('.text');
        const el2 = document.querySelector('.text2');
        const el3 = document.querySelector('.text3');
        const fx = new TextScramble(el);
        const fx2 = new TextScramble(el2);
        const fx3 = new TextScramble(el3);
        let counter = 0;
        const next = () => {
            if (fx.el !== null) {
                fx.setText(phrases[counter]).then(() => {
                    if (phrases.length === counter + 1) return;
                    setTimeout(next, 5000)
                });
            }
        };
        const next2 = () => {
            if (fx2.el !== null) {
                fx2.setText(phrases2[counter]).then(() => {
                    if (phrases2.length === counter + 1) return;
                    setTimeout(next2, 5000)
                });
            }
        };
        const next3 = () => {
            if (fx3.el !== null) {
                fx3.setText(phrases3[counter]).then(() => {
                    setTimeout(next3, 5000)
                });
                counter = (counter + 1) % phrases3.length;
            }

        };
        next3();
        setTimeout(function () {
            next();
            next2();
        }, 6000);
        setTimeout(function () {
            const containerNav = document.querySelector('.container-nav');
            if (containerNav) {
                containerNav.classList.add('active');
            }
        }, 1500);
        setTimeout(function () {
            let continue_text = document.querySelector('.continue-text');

            if (continue_text) {
                continue_text.classList.add('active');
            }
        }, 8000);
        setTimeout(function () {
            const text = document.querySelector('.text');
            const text2 = document.querySelector('.text2');

            if (text && text2) {
                text.classList.add('show-texts');
                text2.classList.add('show-texts');
            }
        }, 2500);
        /*set text ============================*/

        $('.big-btn,.small-btn,.projects_button')
            .on('mouseenter', function (e) {
                const parentOffset = $(this).offset(),
                    relX = e.pageX - parentOffset.left,
                    relY = e.pageY - parentOffset.top;
                $(this).find('span').css({top: relY, left: relX})
            })
            .on('mouseout', function (e) {
                const parentOffset = $(this).offset(),
                    relX = e.pageX - parentOffset.left,
                    relY = e.pageY - parentOffset.top;
                $(this).find('span').css({top: relY, left: relX})
            });

        $('.form-control').click(function () {
            $('.input-field label').removeClass('active');
            $(this).prev('label').toggleClass('active');
        });
    };

    initWow = () =>{
        new WOW.WOW(
            {
                boxClass: 'wow',
                animateClass: 'animated',
                offset: 300,
                mobile: false,
                live: false,
            }
        ).init();
    };

    render() {
        return (
            <Router>
                <div className="App">
                    <Switch>
                        <Route exact path="/" component={Home}/>
                        <Route path="/Portfolio" component={Portfolio}/>
                        <Route path="/AboutUs" component={AboutUs}/>
                        <Route path="/ContactUs" component={ContactUs}/>
                        <Route path="/Blog" component={Blog}/>
                        <Redirect path="*" to="/"/>
                    </Switch>
                    <Feedback/>
                    <ShowPopup/>
                    <Preload/>
                    <PopupLan/>
                </div>
            </Router>
        );
    }
}