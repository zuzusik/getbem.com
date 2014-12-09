var React = require('react');

var NavBar = React.createClass({
    render: function () {
        return (
            <nav className="navbar navbar-default" role="navigation">
                <div className="container">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <a className="navbar-brand" href="/">Get BEM</a>
                    </div>

                    <div className="collapse navbar-collapse">
                        <ul className="nav navbar-nav">
                            <li><a href="/introduction">Introduction</a></li>
                            <li><a href="#naming">Naming</a></li>
                            <li><a href="#building">Building</a></li>
                            <li><a href="#faq">FAQ</a></li>
                        </ul>
                        <ul className="nav navbar-nav navbar-right">
                            <li><a href="http://blog.getbem.com">Blog</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
});

module.exports = NavBar;
