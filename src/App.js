import React from 'react';
import { Switch, Route } from 'react-router-dom';

//Components
import Header from './components/Header';
import Footer from './components/Footer';

//Pages
import Homepage from './pages/Homepage/Homepage';

const App = () => {
  return (
    <div className="App">
      <Header/>
        <Switch>
          <Route exact path="/" render={() => (
            <Homepage />
          )} />
        </Switch>
      <Footer/>
    </div>
  )
};

export default App;