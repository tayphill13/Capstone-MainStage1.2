import React from 'react';
import Header from './Header';
import Footer from './Footer';
import MessageControl from './MessageControl';
import Signin from './Signin';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


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
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;