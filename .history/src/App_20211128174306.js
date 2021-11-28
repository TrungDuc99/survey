



import React from 'react';
import { Switch, Route } from 'react-router-dom'
import { Route, Router } from 'react-router';
import Header from './components/Header';
import index from './Pages/';
function App() {
  return (
     <Router>
        <div className="container">
            <Header />
            <Switch>
               <Route path="/" exact component={index} />
               <Route path="/home" exact component={index} />
            </Switch>
        </div>
     </Router>
  );
}

export default App;
