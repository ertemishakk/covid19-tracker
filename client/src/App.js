import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MainPage from './Components/MainPage';
import { getGlobalData } from './actions/getData'
import { connect } from 'react-redux'
import NavBar from './Components/LayOut/NavBar'
import Footer from './Components/LayOut/Footer'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import SymptomChecker from './Components/SymptomChecker';


class App extends Component {
  componentDidMount() {
    this.props.getGlobalData()
  }

  render() {
    return (
      <div className="App" >
        <NavBar />
        <BrowserRouter>
          <Switch>
            <Route exact path='/' component={MainPage} />
            <Route exact path='/symptomchecker' component={SymptomChecker} />
          </Switch>
        </BrowserRouter>
        {/* <MainPage /> */}
        <Footer />

      </div>


    )
  }
}
const mapStateToProps = state => ({
  data: state.data
})


export default connect(mapStateToProps, { getGlobalData })(App)
