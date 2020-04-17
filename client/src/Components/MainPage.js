import React, { Component } from 'react'
import Title from './Title'
import Cards from './Cards'
import SelectCountry from './SelectCountry'
import Graphs from './Graphs'
// import Footer from './Footer'

export default class MainPage extends Component {
    render() {
        return (
            <div>
                <Title />
                <Cards />
                <SelectCountry />
                <Graphs />
                {/* <Footer /> */}
            </div>
        )
    }
}
