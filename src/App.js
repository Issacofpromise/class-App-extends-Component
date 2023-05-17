import React, {Component} from 'react';
import Fly from './comp/Hd';
import Navy from './comp/Navy';
import './App.css';
import Cth from './comp/Foot';

class App extends Component { constructor(props) { super(props);
   this.state = { info:{name:'WEB',tx:'world wide'},
   sec:{name:'HTM',tx:'HTM is HyperText Markup Language.'},
   cts:[{id:1, title:'HTML', desc:'HTML is for information'},
    {id:2, title:'CSS', desc:'CSS is for design'},
    {id:3, title:'JavaS', desc:'JavaS is for interactive'}]}}
  
  render (){ return ( <div className="App">
   <Fly name={this.state.info.name} tx={this.state.info.tx}></Fly>
   <Navy data={this.state.cts}></Navy>
   <Cth name={this.state.sec.name} tx={this.state.sec.tx}></Cth>
   <Cth name='React' tx='React is... '></Cth>
   <Fly name='MYL'tx='MI-YOEN LEE'></Fly>
   </div>)}}
export default App;