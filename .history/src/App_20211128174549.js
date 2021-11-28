import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import index from "./Pages"
const App = () => {
  return (
    <Router>
        <Routes>
          <Route exact path="/" element={index}/>
        </Routes>
    </Router>
  );
}

export default App;