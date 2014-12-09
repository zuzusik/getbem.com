require('bootstrap');
require('blocks/header.css!');

var React = require('react');
var NavBar = require('blocks/navbar/navbar.jsx!');
var Footer = require('blocks/footer/footer.jsx!');

React.render(
    <div>
        <NavBar/>
        <div className="container">
            <div className="row">
                <div className="col-md-9">
                    <h2 id="introduction">Introduction</h2>

                    <p>On smaller brochure sites, how your organize your styles isn’t usually a big concern. You get in there, write some CSS, or maybe even some SASS. You compile it all into a single stylesheet with SASS’s production settings, and then you aggregate it to get all the stylesheets from modules into a nice tidy package.</p>

                    <p>However, when it comes to larger, more complex projects, how you organize your code is a key to efficiency. Not only in how how much time it takes, but also in how much code you write, and how much a browser has to load. This is especially important when you’re working with a team of themers, and when performance is important.</p>

                    <p>This also true for long-term projects with legacy code (read "<a href="http://webuild.envato.com/blog/how-to-scale-and-maintain-legacy-css-with-sass-and-smacss/">How to Scale and Maintain Legacy CSS with Sass and SMACSS</a>" — some nice SMACSS and BEM mixing in there).</p>

                    <h2 id="methodologies">Methodologies</h2>

                    <p>On smaller brochure sites, how your organize your styles isn’t usually a big concern. You get in there, write some CSS, or maybe even some SASS. You compile it all into a single stylesheet with SASS’s production settings, and then you aggregate it to get all the stylesheets from modules into a nice tidy package.</p>

                    <p>However, when it comes to larger, more complex projects, how you organize your code is a key to efficiency. Not only in how how much time it takes, but also in how much code you write, and how much a browser has to load. This is especially important when you’re working with a team of themers, and when performance is important.</p>

                    <p>This also true for long-term projects with legacy code (read "<a href="How to Scale and Maintain Legacy CSS with Sass and SMACSS">http://webuild.envato.com/blog/how-to-scale-and-maintain-legacy-css-with-sass-and-smacss/</a>" — some nice SMACSS and BEM mixing in there).</p>

                    <h2 id="why">Why BEM over the other?</h2>

                    <p>On smaller brochure sites, how your organize your styles isn’t usually a big concern. You get in there, write some CSS, or maybe even some SASS. You compile it all into a single stylesheet with SASS’s production settings, and then you aggregate it to get all the stylesheets from modules into a nice tidy package.</p>

                    <p>However, when it comes to larger, more complex projects, how you organize your code is a key to efficiency. Not only in how how much time it takes, but also in how much code you write, and how much a browser has to load. This is especially important when you’re working with a team of themers, and when performance is important.</p>

                    <p>This also true for long-term projects with legacy code (read "<a href="How to Scale and Maintain Legacy CSS with Sass and SMACSS">http://webuild.envato.com/blog/how-to-scale-and-maintain-legacy-css-with-sass-and-smacss/</a>" — some nice SMACSS and BEM mixing in there).</p>

                    <h2 id="bem">Blocks, Elements and Modifiers</h2>

                    <p>On smaller brochure sites, how your organize your styles isn’t usually a big concern. You get in there, write some CSS, or maybe even some SASS. You compile it all into a single stylesheet with SASS’s production settings, and then you aggregate it to get all the stylesheets from modules into a nice tidy package.</p>

                    <p>However, when it comes to larger, more complex projects, how you organize your code is a key to efficiency. Not only in how how much time it takes, but also in how much code you write, and how much a browser has to load. This is especially important when you’re working with a team of themers, and when performance is important.</p>

                    <p>This also true for long-term projects with legacy code (read "<a href="How to Scale and Maintain Legacy CSS with Sass and SMACSS">http://webuild.envato.com/blog/how-to-scale-and-maintain-legacy-css-with-sass-and-smacss/</a>" — some nice SMACSS and BEM mixing in there).</p>

                    <h2 id="hood">Under the hood</h2>

                    <p>On smaller brochure sites, how your organize your styles isn’t usually a big concern. You get in there, write some CSS, or maybe even some SASS. You compile it all into a single stylesheet with SASS’s production settings, and then you aggregate it to get all the stylesheets from modules into a nice tidy package.</p>

                    <p>However, when it comes to larger, more complex projects, how you organize your code is a key to efficiency. Not only in how how much time it takes, but also in how much code you write, and how much a browser has to load. This is especially important when you’re working with a team of themers, and when performance is important.</p>

                    <p>This also true for long-term projects with legacy code (read "<a href="How to Scale and Maintain Legacy CSS with Sass and SMACSS">http://webuild.envato.com/blog/how-to-scale-and-maintain-legacy-css-with-sass-and-smacss/</a>" — some nice SMACSS and BEM mixing in there).</p>

                    <h2 id="benefits">Benefits</h2>

                    <p>On smaller brochure sites, how your organize your styles isn’t usually a big concern. You get in there, write some CSS, or maybe even some SASS. You compile it all into a single stylesheet with SASS’s production settings, and then you aggregate it to get all the stylesheets from modules into a nice tidy package.</p>

                    <p>However, when it comes to larger, more complex projects, how you organize your code is a key to efficiency. Not only in how how much time it takes, but also in how much code you write, and how much a browser has to load. This is especially important when you’re working with a team of themers, and when performance is important.</p>

                    <p>This also true for long-term projects with legacy code (read "<a href="How to Scale and Maintain Legacy CSS with Sass and SMACSS">http://webuild.envato.com/blog/how-to-scale-and-maintain-legacy-css-with-sass-and-smacss/</a>" — some nice SMACSS and BEM mixing in there).</p>
                </div>
                <div className="col-md-3">
                    <div className="hidden-print hidden-xs hidden-sm affix" id="affix">
                        <ul className="nav nav-pills nav-stacked">
                            <li><a href="#introduction">Introduction</a></li>
                            <li><a href="#methodologies">Methodologies</a></li>
                            <li><a href="#why">Why BEM over the others</a></li>
                            <li><a href="#bem">Blocks, Elements and Modifiers</a></li>
                            <li><a href="#hood">Under the hood</a></li>
                            <li><a href="#benefits">Benefits</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <Footer/>
    </div>,
    document.body
);
