import React, {Component} from 'react';
class Foot extends Component {render (){ console.log('Foot render');    
    return ( <article>
    <h2>{this.props.title}</h2>{this.props.desc}</article>)}}
export default Foot;