require('./advantage.css!');

var React = require('react');

var Advantages = React.createClass({
    render: function () {
        return (
            <div className="row advantages">
                <div className="col-sm-4">
                    <div className="advantage">
                        <h2 className="advantage__title advantage__title_green">Easy</h2>
                        <p className="advantage__desc">To use BEM you literally do not need nothing besides BEM naming.</p>
                    </div>
                </div>
                <div className="col-sm-4">
                    <div className="advantage">
                        <h2 className="advantage__title advantage__title_blue">Modular</h2>
                        <p className="advantage__desc">Independent blocks and css selectors plus layer system makes your code reusable and modular.</p>
                    </div>
                </div>
                <div className="col-sm-4">
                    <div className="advantage">
                        <h2 className="advantage__title advantage__title_red">Flexible</h2>
                        <p className="advantage__desc">Methodology and tools, that can be recomposed and configured in the way you like BEM.</p>
                    </div>
                </div>
            </div>
        )
    }
});

module.exports = Advantages;
