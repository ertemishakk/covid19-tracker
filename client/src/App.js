import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import store from './store'
import { Provider } from 'react-redux'
import MainPage from './Components/MainPage';


class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <div className="App" >
          <MainPage />
        </div>
      </Provider>

    )
  }
}



export default App
