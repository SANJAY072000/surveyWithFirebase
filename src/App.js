import React,{Component} from 'react';
import './App.css';
import Usurvey from './components/Usurvey';

export default class App extends Component {
  render(){
    return(
      <div className="App" style={{"marginBottom":"50px"}}>
        <Usurvey/>
      </div>
    );
  }
}
