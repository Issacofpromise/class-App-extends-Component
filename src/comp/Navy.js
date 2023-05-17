import React, {Component} from 'react';
class Navy extends Component {render (){ let lists = [];
    let dat = this.props.data;
    for(let i=0; i < dat.length; i++){
      lists.push(<li key={dat[i].id}><a href={"/content/"+dat[i].id}>{dat[i].title}</a></li>);
    }    
    return ( <ol>{lists}</ol>)}}
export default Navy;