import React, { Component } from 'react'
import CountUp from 'react-countup';
import {
    Row, Col, Card, CardText, CardBody,
    CardTitle, CardSubtitle,
} from 'reactstrap'
import { connect } from 'react-redux'
import Spinner from '../Spinner'
class Cards extends Component {

    render() {
        return (
            <div>
                <Row className='pt-4' style={{ paddingRight: '15%', paddingLeft: '15%' }}>
                    <Col lg='4'>

                        <Card style={{ borderBottomColor: 'rgb(217, 83, 79)', borderBottomWidth: 5, height: '200px' }}>
                            <CardBody>
                                <CardTitle className='text-muted h5'>Infected</CardTitle>
                                <CardSubtitle className='font-weight-bold h3'>
                                    {
                                        this.props.data.globalData.length === 0 || this.props.data.globalDataLoading ?
                                            (<Spinner />) : (

                                                <CountUp start={0}
                                                    end={this.props.data.globalData[0].TotalConfirmed} separator=',' />
                                            )}
                                </CardSubtitle>
                                <CardText className='pt-3' style={{ fontSize: '14' }}>Number of active cases of COVID-19.</CardText>

                            </CardBody>
                        </Card>

                    </Col>
                    <Col lg='4'>

                        <Card style={{ borderBottomColor: 'rgb(92, 184, 92)', borderBottomWidth: 5, height: '200px' }}>
                            <CardBody>
                                <CardTitle className='text-muted h5'>Recovered</CardTitle>
                                <CardSubtitle className='font-weight-bold h3'>
                                    {this.props.data.globalData.length === 0 || this.props.data.globalDataLoading ?
                                        (<Spinner />) : (
                                            <CountUp start={0}
                                                end={this.props.data.globalData[0].TotalRecovered} separator=',' />
                                        )}
                                </CardSubtitle>
                                <CardText className='pt-3' style={{ fontSize: '14' }}>Number of recoveries from COVID-19.</CardText>

                            </CardBody>
                        </Card>

                    </Col>
                    <Col lg='4'>

                        <Card style={{ borderBottomColor: 'rgb(41, 43, 44)', borderBottomWidth: 5, height: '200px' }}>
                            <CardBody>
                                <CardTitle className='text-muted h5'>Deaths</CardTitle>
                                <CardSubtitle className='font-weight-bold h3'>
                                    {this.props.data.globalData.length === 0 || this.props.data.globalDataLoading ?
                                        (<Spinner />) : (
                                            <CountUp start={0}
                                                end={this.props.data.globalData[0].TotalDeaths} separator=',' />
                                        )}
                                </CardSubtitle>
                                <CardText className='pt-3' style={{ fontSize: '14' }}>Number of deaths caused by COVID-19.</CardText>

                            </CardBody>
                        </Card>

                    </Col>
                </Row>

                <Row className='pt-4' style={{ paddingRight: '15%', paddingLeft: '15%' }}>
                    <Col lg='4'>

                        <Card style={{ borderBottomColor: 'rgb(2, 117, 216)', borderBottomWidth: 5, height: '200px' }}>
                            <CardBody>
                                <CardTitle className='text-muted h5'>Total New Cases Today</CardTitle>
                                <CardSubtitle className='font-weight-bold h3'>
                                    {this.props.data.globalData.length === 0 || this.props.data.globalDataLoading ?
                                        (<Spinner />) : (
                                            <CountUp start={0}
                                                end={this.props.data.globalData[0].NewConfirmed} separator=',' />
                                        )}
                                </CardSubtitle>
                                <CardText className='pt-3' style={{ fontSize: '14' }}>Total number of cases  COVID-19.</CardText>

                            </CardBody>
                        </Card>

                    </Col>
                    <Col lg='4'>

                        <Card style={{ borderBottomColor: 'rgb(240, 173, 78)', borderBottomWidth: 5, height: '200px' }}>
                            <CardBody>
                                <CardTitle className='text-muted h5'>Total New Deaths Today</CardTitle>
                                <CardSubtitle className='font-weight-bold h3'>
                                    {this.props.data.globalData.length === 0 || this.props.data.globalDataLoading ?
                                        (<Spinner />) : (
                                            <CountUp start={0}
                                                end={this.props.data.globalData[0].NewDeaths} separator=',' />
                                        )}
                                </CardSubtitle>
                                <CardText className='pt-3' style={{ fontSize: '14' }}>Total number of new deaths from COVID-19.</CardText>

                            </CardBody>
                        </Card>

                    </Col>
                    <Col lg='4'>

                        <Card style={{
                            borderBottomColor: 'rgb(91, 192, 222)', borderBottomWidth: 5, height: '200px'
                        }}>
                            <CardBody>
                                < CardTitle className='text-muted h5'>Total New Recoveries Today </CardTitle>
                                <CardSubtitle className='font-weight-bold h3'>
                                    {this.props.data.globalData.length === 0 || this.props.data.globalDataLoading ?
                                        (<Spinner />) : (
                                            <CountUp start={0}
                                                end={this.props.data.globalData[0].NewRecovered} separator=',' />
                                        )}
                                </CardSubtitle>
                                <CardText className='pt-3' style={{ fontSize: '14' }}>Total number of new recoveries from COVID-19.</CardText>

                            </CardBody>
                        </Card>

                    </Col>
                </Row >

            </div >
        )
    }
}


const mapStateToProps = state => ({
    data: state.data
})


export default connect(mapStateToProps, {})(Cards)