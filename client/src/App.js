import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MainPage from './Components/MainPage';

import NavBar from './Components/LayOut/NavBar'
import Footer from './Components/LayOut/Footer'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import SymptomChecker from './Components/SymptomChecker';
import Media from './Components/Media';
import About from './Components/About';


class App extends Component {


  render() {
    return (
      <div className="App" >
        <NavBar />
        <BrowserRouter>
          <Switch>
            <Route exact path='/' component={MainPage} />
            <Route exact path='/symptomchecker' component={SymptomChecker} />
            <Route exact path='/media' component={Media} />
            <Route exact path='/about' component={About} />

          </Switch>
        </BrowserRouter>
        <Footer />

      </div>


    )
  }
}


export default App
