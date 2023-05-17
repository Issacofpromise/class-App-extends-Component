import React, {Component} from 'react';
import './App.css';
class Fly extends Component {render (){ return ( <header>
            <h1>{this.props.name}</h1>Hello, {this.props.tx}</header> )}}
class Foot extends Component {render (){ return ( <article>
  <h2>{this.props.name}</h2>{this.props.tx}</article>)}}
class Navy extends Component {render (){ return ( <ul>
                <li><a href="1.html">HTML</a></li>
                <li><a href="2.html">CSS</a></li>
                <li><a href="3.html">JavaScript</a></li> </ul>)}}
class App extends Component { render (){ 
    return ( <div className="App">
   <Fly name='WEB'tx='world wide web!'></Fly><Navy></Navy>
   <Foot name='HTML' tx='HTML is HyperText Markup Language.'></Foot>
   <Foot name='React' tx='React is... '></Foot>
   <Fly name='MYL'tx='MI-YOEN LEE'></Fly>
   </div>)}}
export default App;
