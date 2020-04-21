import React, { Component } from 'react'
import Title from './WorldData/Title'
import Cards from './WorldData/Cards'
import SelectCountry from './WorldData/SelectCountry'
import Graphs from './WorldData/Graphs'
import { getGlobalData } from '../actions/getData'
import { connect } from 'react-redux'

class MainPage extends Component {
    componentDidMount() {
        this.props.getGlobalData()
    }

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
const mapStateToProps = state => ({
    data: state.data
})


export default connect(mapStateToProps, { getGlobalData })(MainPage)