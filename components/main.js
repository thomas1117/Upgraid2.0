var React = require('react');
import Nav from './nav-bar/nav-body.js';

module.exports = React.createClass({
    render: function() {
        return <div>
         	<Nav/>
            {this.props.children}
            
        </div>
    }
});