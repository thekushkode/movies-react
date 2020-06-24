import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import MovieCard from './components/MovieCard';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>'I Scene-t It!'</h1>
          <h3>A Movie Database</h3>
        </header>
        <Switch>
          <Route exact path='/' component={MovieCard} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
