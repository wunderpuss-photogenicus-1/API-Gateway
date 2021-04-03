import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import MainPage from './App/Pages/MainPage';



class App extends React.Component{
    constructor(props){
        super(props)
        this.state = {}
    }
    render(){
        return(
            <div>
              <MainPage/>
            </div>
        )
    }
}
// eslint-disable-next-line linebreak-style

ReactDOM.render((<App/>), document.getElementById('root'))