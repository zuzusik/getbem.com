var $ = require('bootstrap');
require('blocks/header.css!');

var React = require('react');
var NavBar = require('blocks/navbar/navbar.jsx!');
var Footer = require('blocks/footer/footer.jsx!');

var Affix = React.createClass({
    componentDidMount: function () {
        $('body').scrollspy({ target: '.affix' })

        $(this.getDOMNode()).find("ul.nav").affix({
            offset: {
                top: 100,
                bottom: function () {
                    return (this.bottom = $('.footer').outerHeight(true))
                }
            }
        });
    },
    render: function () {
        return (
            <div className="hidden-print hidden-xs hidden-sm affix">
                <ul className="nav nav-pills nav-stacked">
                    <li><a href="#introduction">Introduction</a></li>
                    <li><a href="#methodologies">Methodologies</a></li>
                    <li><a href="#whybemovertheothers">Why BEM over the others</a></li>
                    <li><a href="#blockselementsandmodifiers">Blocks, Elements and Modifiers</a></li>
                    <li><a href="#underthehood">Under the hood</a></li>
                    <li><a href="#benefits">Benefits</a></li>
                </ul>
            </div>
        );
    }
});

var Content = React.createClass({
    render: function () {
        var content = require('./introduction.md!');

        return (
            <div dangerouslySetInnerHTML={{__html: content}}></div>
        );
    }
});

React.render(
    <div>
        <NavBar/>
        <div className="container">
            <div className="row">
                <div className="col-md-9">
                    <Content/>
                </div>
                <div className="col-md-3">
                    <Affix/>
                </div>
            </div>
        </div>
        <Footer/>
    </div>,
    document.body
);
