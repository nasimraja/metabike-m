import React, { Component } from 'react';
import {BrowserRouter as Router, Route,Redirect} from 'react-router-dom';
import './App.css';
import Home from './components/pages/home/home.js';
import Play from './components/pages/play/Play.js'; 
import Marketplace from './components/pages/marketplace/Marketplace.js'; 


const PrivateRoute = ({ component: Component, ...rest }) => (
	<Route {...rest} render={(props) => (
	  localStorage.getItem('ACCESS_ID') != null ? <Redirect to='/' /> : <Component {...props} />
	)} />
  )
class App extends Component {

  render() {
    return (
	<Router>
		<div>				
			<Route exact path="/" name="Home Page" component = {Home} />
			<Route exact path="/play" name="Play Page" component = {Play} />
			<Route exact path="/marketplace" name="Marketplace Page" component = {Marketplace} />
		</div>
	</Router>
    );
  }
}

export default App;
