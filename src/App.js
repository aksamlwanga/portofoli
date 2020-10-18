import React from 'react';
import AboutMe from './pages/AboutMe';
import ContactMe from './pages/ContactMe';
import Landing from './pages/Landing';

import MyWork from './pages/MyWork';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <>
      <div class="KW_progressContainer">
        <div class="KW_progressBar"></div>
      </div>
      <div className="page">
        <Router>
          <Switch>
            <Route exact path="/" component={Landing} />
            <Route path="/about" component={AboutMe} />
            <Route path="/contact" component={ContactMe} />
            <Route path="/work" component={MyWork} />
          </Switch>
        </Router>
      </div>
    </>

  );
}

export default App;
