import React, { Component } from 'react'
import { Row, Col } from 'reactstrap'
import { Bar, Line } from 'react-chartjs-2';
import { connect } from 'react-redux'
import Spinner from './Spinner'


class Graphs extends Component {
    render() {
        return (
            <div>
                <Row className='pt-4' style={{ paddingRight: '15%', paddingLeft: '15%' }}>
                    <Col>
                        {this.props.data.globalData.length === 0 ? <Spinner /> :
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
                                <Line />
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