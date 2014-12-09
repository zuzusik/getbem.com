require('./footer.css!');
require('./twitter');
require('github-buttons');
require('github-buttons/style.css!'); // Temporary hack to include styles

var React = require('react');

var Footer = React.createClass({
    render: function () {
        return (
            <div className="footer">
                <ul className="list list-unstyled list-inline">
                    <li>
                        <span className="github-btn hide" data-user="getbem" data-repo="getbem.com" data-type="watch" data-count="1"/>
                    </li>
                    <li>
                        <span className="github-btn hide" data-user="getbem" data-repo="getbem.com" data-type="fork" data-count="1"/>
                    </li>
                    <li>
                        <a href="https://twitter.com/getbem" className="twitter-follow-button footer__follow-fix" data-show-count="true" data-dnt="true">Follow @getbem</a>
                    </li>
                    <li>
                        <a href="https://twitter.com/share" className="twitter-share-button" data-via="getbem" data-related="getbem" data-hashtags="b_" data-dnt="true">Tweet</a>
                    </li>
                </ul>

                <p>Brought to you by <a href="https://github.com/floatdrop">@floatdrop</a> and <a href="https://github.com/matmuchrapna">@matmuchrapna</a>.<br/>
                Maintained by the <a href="https://github.com/orgs/getbem/people">core team</a> with the help of our <a href="https://github.com/getbem/getbem.com/graphs/contributors">contributors</a>.<br/>
                Code licensed under <a href="https://github.com/getbem/getbem.com/blob/master/LICENSE.md">MIT</a>, documentation under <a href="https://github.com/getbem/getbem.com/blob/master/levels/pages/LICENSE.md">CC BY 3.0</a>.
                </p>

                <ul className="list list-unstyled list-inline">
                    <li className="list__item"><a href="https://twitter.com/getbem">Twitter</a></li>
                    <li className="list__item"><a href="https://github.com/getbem/getbem.com/">GitHub</a></li>
                    <li className="list__item"><a href="https://github.com/getbem/getbem.com/issues">Issues</a></li>
                    <li className="list__item"><a href="https://github.com/getbem/getbem.com/issues/8">Project goals</a></li>
                    <li className="list__item"><a href="https://github.com/getbem/getbem.com/issues/1">Are you using BEM?</a></li>
                </ul>
            </div>
        )
    }
});

module.exports = Footer;
