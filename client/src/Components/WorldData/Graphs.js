import React, { Component } from 'react'
import { Row, Col } from 'reactstrap'
import { Bar, Line } from 'react-chartjs-2';
import { connect } from 'react-redux'
import Spinner from '../Spinner'
import moment from 'moment'


class Graphs extends Component {
    render() {
        return (
            <div>
                <Row className='pt-4 pb-5' style={{ paddingRight: '15%', paddingLeft: '15%' }}>
                    <Col>
                        {this.props.data.globalData.length === 0 || this.props.data.dailyDataLoading || this.props.data.globalDataLoading ?
                            <div className='text-center'>
                                <Spinner />
                            </div> :
                            this.props.data.from === 'global' ?
                                <Bar
                                    data={{
                                        labels: ['Infected', 'Recovered', 'Deaths'],
                                        datasets: [
                                            {
                                                label: 'People',
                                                backgroundColor: ['rgba(0, 0, 255, 0.5)', 'rgba(0, 255, 0, 0.5)', 'rgba(255, 0, 0, 0.5)'],
                                                hoverBackgroundColor: ['rgba(0, 0, 255, 0.7)', 'rgba(0, 255, 0, 0.9)', 'rgba(255, 0, 0, 0.9)'],
                                                data: [this.props.data.globalData[0].TotalConfirmed,
                                                this.props.data.globalData[0].TotalRecovered,
                                                this.props.data.globalData[0].TotalDeaths],
                                            },
                                        ],
                                    }}
                                    options={{
                                        legend: { display: false },
                                        title: {
                                            display: true,
                                            text: `Current state in ${this.props.data.from === 'global' ? 'the world' : this.props.data.from}`
                                        },
                                    }}
                                /> :
                                <Line
                                    data={{
                                        labels: this.props.data.dailyData.map(daily => moment(daily.Date).format('MMMM Do YYYY')),
                                        datasets: [{
                                            data: this.props.data.dailyData.map(daily => daily.Confirmed),
                                            label: 'Infected',
                                            borderColor: '#3333ff',
                                            fill: true,
                                        }, {
                                            data: this.props.data.dailyData.map(daily => daily.Deaths),
                                            label: 'Deaths',
                                            borderColor: 'red',
                                            backgroundColor: 'rgba(255, 0, 0, 0.5)',
                                            fill: true,
                                        },
                                        ]
                                    }}
                                    options={{

                                        title: {
                                            display: true,
                                            text: `Current state in ${this.props.data.from === 'global' ? 'the world' : this.props.data.from}`
                                        },
                                    }}
                                />
                        }
                    </Col>
                </Row>

            </div>
        )
    }
}

const mapStateToProps = state => ({
    data: state.data
})

export default connect(mapStateToProps, {})(Graphs)