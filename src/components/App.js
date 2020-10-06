import React from 'react';
import Header from './Header';
import Footer from './Footer';
import About from './About';
import MessageControl from './MessageControl';
import Signin from './Signin';
import Contact from './Contact';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import '../styles/layout.scss';
import '../styles/index.scss';

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path='/signin'>
          <Signin />
        </Route>
        <Route path='/'>
          <MessageControl />
        </Route>
        <Route path='/about' exact>
          <About />
        </Route>
        <Route path='/contact'>
          <Contact />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
