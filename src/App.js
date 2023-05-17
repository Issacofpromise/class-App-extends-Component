import React, {Component} from 'react';
import Fly from './comp/Hd';
import Navy from './comp/Navy';
import './App.css';
import Cth from './comp/Foot';

class App extends Component { render (){ 
    return ( <div className="App">
   <Fly name='WEB'tx='world wide web!'></Fly><Navy></Navy>
   <Cth name='HTML' tx='HTML is HyperText Markup Language.'></Cth>
   <Cth name='React' tx='React is... '></Cth>
   <Fly name='MYL'tx='MI-YOEN LEE'></Fly>
   </div>)}}
export default App;
