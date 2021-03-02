import React from 'react';
import logo from './logo.svg';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link
  } from "react-router-dom";
import './App.css';
import Home from './components/Home/home.js'

function App() {
  return (
    <main>
      <Router> 
        <Switch>
            <Route path="/" component={Home} exact />
        </Switch>
      </Router>
    </main>
  );
}

export default App;
