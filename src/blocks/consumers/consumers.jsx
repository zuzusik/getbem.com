require('./consumers.css!');

var React = require('react');

var Consumers = React.createClass({
    render: function () {
        return (
            <div className="consumers">
                <h3 className="consumers__heading">Companies using BEM:</h3>
                <div className="consumers__list">
                    <ul className="list list-inline list-unstyled">
                        <li className="list__item consumers__item">
                            <a href="https://yandex.com/" title="Yandex" className="consumers__item-link">
                                <img src="/images/consumers/yandex.png" height="70" className="consumers__item-logo"/>
                            </a>
                        </li>
                        <li className="list__item consumers">
                            <a href="http://www.jetbrains.com/" title="JetBrains" className="consumers__item-link">
                                <img src="/images/consumers/Jetbrains.png" height="70" className="consumers__item-logo"/>
                            </a>
                        </li>
                        <li className="list__item consumers">
                            <a href="http://factory.mn/" title="Manufactura" className="consumers__item-link">
                                <img src="/images/consumers/manufactura.png" height="70" className="consumers__item-logo"/>
                            </a>
                        </li>
                        <li className="list__item consumers">
                            <a href="http://eu.ideus.biz/" title="iDeus" className="consumers__item-link">
                                <img src="/images/consumers/ideus.png" height="70" className="consumers__item-logo"/>
                            </a>
                        </li>
                        <li className="list__item consumers">
                            <a href="http://alfabank.com/" title="Alfa-Bank" className="consumers__item-link">
                                <img src="/images/consumers/alfabank.png" height="70" className="consumers__item-logo"/>
                            </a>
                        </li>
                        <li className="list__item consumers">
                            <a href="http://edster.ru/" title="Edster" className="consumers__item-link">
                                <img src="/images/consumers/edster.png" height="70" className="consumers__item-logo"/>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
});

module.exports = Consumers;
