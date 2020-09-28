import React from 'react';
import {Route, HashRouter, Switch} from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Header from './components/Header';

import './App.scss';

function App() {
  return (
    <div className="App">
      
      <HashRouter>
      <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" exact component={About} />
        </Switch>
      </HashRouter>
    </div>
  );
}

export default App;
