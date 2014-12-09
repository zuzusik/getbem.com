require('bootstrap');
require('blocks/header.css!');

/*
require('blocks/twitter');
require('blocks/advantages/advantages.css!');
require('blocks/affix.css!');
require('blocks/footer.css!');

require('blocks/consumers.css!');*/

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
        <Advantages/>
        <Consumers/>
        <Footer/>
    </div>,
    document.body
);
