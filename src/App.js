import React from 'react';
import { Switch, Route } from 'react-router-dom';

//Components
import Header from './components/Header';
import Footer from './components/Footer';

//Pages
import Homepage from './pages/Homepage/Homepage';
import Aboutpage from './pages/Aboutpage/Aboutpage';
import Menupage from './pages/Menupage/Menupage';
import Contactpage from './pages/Contactpage/Contactpage';

const App = () => {
  return (
    <div className="App">
      <Header/>
        <Switch>
          <Route exact path="/restaurant-page" render={() => (
            <Homepage />
          )} />

          <Route exact path="/about" render={() => (
            <Aboutpage/>
          )} />

          <Route exact path="/menu" render={() => (
            <Menupage/>
          )} />

          <Route exact path="/contact" render={() => (
            <Contactpage/>
          )} />
        </Switch>
      <Footer/>
    </div>
  )
};

export default App;