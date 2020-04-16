import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MainPage from './Components/MainPage';
import { getGlobalData } from './actions/getData'
import { connect } from 'react-redux'


class App extends Component {
  componentDidMount() {
    this.props.getGlobalData()
  }

  render() {
    return (
      <div className="App" >
        <MainPage />
      </div>


    )
  }
}
const mapStateToProps = state => ({
  data: state.data
})


export default connect(mapStateToProps, { getGlobalData })(App)
