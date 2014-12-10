require('bootstrap');
require('blocks/header.css!');
require('blocks/icon.css!');

var React = require('react');
var NavBar = require('blocks/navbar/navbar.jsx!');
var Footer = require('blocks/footer/footer.jsx!');
var Advantages = require('blocks/advantages/advantages.jsx!');
var Consumers = require('blocks/consumers/consumers.jsx!');

React.render(
    <div>
        <NavBar/>
        <div className="header">
            <img src="/images/b.svg"  className="header__logo"/>
            <h1 className="header__desc">BEM — Block Element Modifier is a methodology, that helps you to achieve reusable components and code sharing in the front-end.</h1>
        </div>
        <div className="container">
            <Advantages/>

            <div className="row big-icons">
                <div className="col-sm-4">
                    <div className="icon">
                        <a href="/introduction/">
                            <div className="icon__image">
                                <img src="/images/book.svg"/>
                            </div>
                            <h2 className="icon__caption">Introduction</h2>
                        </a>
                    </div>
                </div>

                <div className="col-sm-4">
                    <div className="icon">
                        <a href="/naming/">
                            <div className="icon__image">
                                <img src="/images/rename.svg"/>
                            </div>
                            <h2 className="icon__caption">Naming</h2>
                        </a>
                    </div>
                </div>

                <div className="col-sm-4">
                    <div className="icon">
                        <a href="/building/">
                            <div className="icon__image">
                                <img src="/images/build.svg"/>
                            </div>
                            <h2 className="icon__caption">Building</h2>
                        </a>
                    </div>
                </div>
            </div>

            <Consumers/>
        </div>
        <Footer/>
    </div>,
    document.body
);
