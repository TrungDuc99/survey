


import React from 'react';
import {BrowserRouter as Router,Link, Route,Switch} from 'react-router-dom'
import Header from './components/Header';
import index from './Pages';
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
