


import { Switch } from '@mui/material';
import React from 'react';
import { Route, Router } from 'react-router';
import Header from './components/Header';
import index from './Pages/index';
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
