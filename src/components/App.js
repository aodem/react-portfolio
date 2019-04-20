import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from '../components/pages/Home';
import Experience from '../components/pages/Experience';

function App() {
    return (
      <Router>
        <Route exact path="/" component={Home} />
        <Route exact path="/experience" component={Experience} />
      </Router>
    );
}

export default App;