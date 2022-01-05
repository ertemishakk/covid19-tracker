import React, { Component } from 'react'
import Title from './WorldData/Title'
import Cards from './WorldData/Cards'
import SelectCountry from './WorldData/SelectCountry'
import Graphs from './WorldData/Graphs'
import { getGlobalData } from '../actions/getData'
import { connect } from 'react-redux'
import Map from './WorldData/Map'
import { Row, Col } from 'reactstrap'

class MainPage extends Component {
    componentDidMount() {
        this.props.getGlobalData()
    }

    render() {
        return (
            <div>
                <Title />
                <Map />

                <Cards />

                <SelectCountry />
                <div className='container'>
                    <Row>
                        <Col>
                            <Graphs />

                        </Col>
                    </Row>
                </div>


            </div >
        )
    }
}
const mapStateToProps = state => ({
    data: state.data
})


export default connect(mapStateToProps, { getGlobalData })(MainPage)