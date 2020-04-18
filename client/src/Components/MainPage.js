import React, { Component } from 'react'
import Title from './WorldData/Title'
import Cards from './WorldData/Cards'
import SelectCountry from './WorldData/SelectCountry'
import Graphs from './WorldData/Graphs'

export default class MainPage extends Component {
    render() {
        return (
            <div>
                <Title />
                <Cards />
                <SelectCountry />
                <Graphs />
            </div>
        )
    }
}
