import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Navbar from './components/navbar';

function App() {
  return (
    <Router>
      <Navbar/>
      <Switch>
        <Route path='/' />
      </Switch>
    </Router>
  );
}

export default App;
