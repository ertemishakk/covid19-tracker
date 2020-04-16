import React, { Component } from 'react'
import CountUp from 'react-countup';
import {
    Row, Col, Card, CardText, CardBody,
    CardTitle, CardSubtitle,
} from 'reactstrap'
import { connect } from 'react-redux'
import Spinner from './Spinner'
class Cards extends Component {

    render() {
        let date = new Date()
        return (
            <div>
                <Row className='pt-4' style={{ paddingRight: '10%', paddingLeft: '10%' }}>
                    <Col md='4'>

                        <Card style={{ borderBottomColor: 'rgb(217, 83, 79)', borderBottomWidth: 5 }}>
                            <CardBody>
                                <CardTitle className='text-muted h4'>Infected</CardTitle>
                                <CardSubtitle className='font-weight-bold h3'>
                                    {this.props.data.globalData.length === 0 ?
                                        (<Spinner />) : (
                                            <CountUp start={0}
                                                end={this.props.data.globalData.results[0].total_cases} separator=',' />
                                        )}
                                </CardSubtitle>
                                <CardText>Number of active cases of COVID-19.</CardText>

                            </CardBody>
                        </Card>

                    </Col>
                    <Col md='4'>

                        <Card style={{ borderBottomColor: 'rgb(92, 184, 92)', borderBottomWidth: 5 }}>
                            <CardBody>
                                <CardTitle className='text-muted h4'>Recovered</CardTitle>
                                <CardSubtitle className='font-weight-bold h3'>
                                    {this.props.data.globalData.length === 0 ?
                                        (<Spinner />) : (
                                            <CountUp start={0}
                                                end={this.props.data.globalData.results[0].total_recovered} separator=',' />
                                        )}
                                </CardSubtitle>
                                <CardText>Number of recoveries from COVID-19.</CardText>

                            </CardBody>
                        </Card>

                    </Col>
                    <Col md='4'>

                        <Card style={{ borderBottomColor: 'rgb(41, 43, 44)', borderBottomWidth: 5 }}>
                            <CardBody>
                                <CardTitle className='text-muted h4'>Deaths</CardTitle>
                                <CardSubtitle className='font-weight-bold h3'>
                                    {this.props.data.globalData.length === 0 ?
                                        (<Spinner />) : (
                                            <CountUp start={0}
                                                end={this.props.data.globalData.results[0].total_deaths} separator=',' />
                                        )}
                                </CardSubtitle>
                                <CardText>Number of deaths caused by COVID-19.</CardText>

                            </CardBody>
                        </Card>

                    </Col>
                </Row>

                <Row className='pt-4' style={{ paddingRight: '10%', paddingLeft: '10%' }}>
                    <Col md='4'>

                        <Card style={{ borderBottomColor: 'rgb(2, 117, 216)', borderBottomWidth: 5 }}>
                            <CardBody>
                                <CardTitle className='text-muted h4'>Total New Cases Today</CardTitle>
                                <CardSubtitle className='font-weight-bold h3'>
                                    {this.props.data.globalData.length === 0 ?
                                        (<Spinner />) : (
                                            <CountUp start={0}
                                                end={this.props.data.globalData.results[0].total_new_cases_today} separator=',' />
                                        )}
                                </CardSubtitle>
                                <CardText>Total number of cases  COVID-19.</CardText>

                            </CardBody>
                        </Card>

                    </Col>
                    <Col md='4'>

                        <Card style={{ borderBottomColor: 'rgb(240, 173, 78)', borderBottomWidth: 5 }}>
                            <CardBody>
                                <CardTitle className='text-muted h4'>Total New Deaths Today</CardTitle>
                                <CardSubtitle className='font-weight-bold h3'>
                                    {this.props.data.globalData.length === 0 ?
                                        (<Spinner />) : (
                                            <CountUp start={0}
                                                end={this.props.data.globalData.results[0].total_new_deaths_today} separator=',' />
                                        )}
                                </CardSubtitle>
                                <CardText>Total number of total deaths from COVID-19.</CardText>

                            </CardBody>
                        </Card>

                    </Col>
                    <Col md='4'>

                        <Card style={{
                            borderBottomColor: 'rgb(91, 192, 222)', borderBottomWidth: 5
                        }}>
                            <CardBody>
                                < CardTitle className='text-muted h4'>Total Affected Countries</CardTitle>
                                <CardSubtitle className='font-weight-bold h3'>
                                    {this.props.data.globalData.length === 0 ?
                                        (<Spinner />) : (
                                            <CountUp start={0}
                                                end={this.props.data.globalData.results[0].total_affected_countries} separator=',' />
                                        )}
                                </CardSubtitle>
                                <CardText>Number of affected countries today.</CardText>

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