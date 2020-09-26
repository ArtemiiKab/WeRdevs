import React from 'react';
import {Route, BrowserRouter, Switch} from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Header from './components/Header';

import './App.css';

function App() {
  return (
    <div className="App">
     <Header />
     <BrowserRouter>
          <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/about" exact component={About} />
          </Switch>
        </BrowserRouter>
      
    </div>
  );
}

export default App;
