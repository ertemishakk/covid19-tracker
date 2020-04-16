import React, { Component } from 'react'
import Title from './Title'
import Cards from './Cards'
// import Footer from './Footer'

export default class MainPage extends Component {
    render() {
        return (
            <div>
                <Title />
                <Cards />
                {/* <Footer /> */}
            </div>
        )
    }
}
