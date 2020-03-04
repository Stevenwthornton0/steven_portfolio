import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from '../Header/Header';
import Homepage from '../../routes/Homepage/Homepage';
import AboutMe from '../../routes/AboutMe/AboutMe';
import Projects from '../../routes/Projects/Projects';
import Footer from '../Footer/Footer';
import './App.css';

class App extends Component {

  render() {
    return (
      <div className='App'>
        <header className='header'>
          <Header />
        </header>

        <div className='bar top'></div>

        <div className='piano'>
        </div>

        <div className='bar'></div>

        <main className='App_main'>

          <Switch>

            <Route 
              exact
              path={'/'}
              component={Homepage}
            />

            <Route 
              path={'/aboutme'}
              component={AboutMe}
            />

            <Route 
              path={'/projects'}
              component={Projects}
            />

          </Switch>
        </main>

        <footer className='footer'>
          <Footer />
        </footer>
      </div>
    )
  }
}

export default App;