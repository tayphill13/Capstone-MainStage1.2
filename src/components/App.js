import React from 'react';
import Header from './Header';
import Footer from './Footer';
import MessageControl from './MessageControl';
import About from './About';
import Signin from './Signin';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import '../styles/layout.scss';
import'../styles/index.scss';

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path='/signin'>
        <Signin />
        </Route>
        <Route path='/'>
          <MessageControl/>
        </Route>
        <Route path='/about'>
          <About />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
