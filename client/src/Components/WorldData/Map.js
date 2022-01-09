import React, { Component } from 'react'
import Axios from 'axios'
import { VectorMap } from 'react-jvectormap'
import moment from 'moment'
import { connect } from 'react-redux'


class Map extends Component {
    state = {
        mapData: {},
        resData: []
    }

    componentDidMount() {
        this.getCountries()
    }



    getCountries = () => {
        Axios.get('/getCountriesData')
            .then(res => {


                let data = {}

                for (let i = 0; i < res.data.length; i++) {
                    data[res.data[i].countryInfo.iso2] = res.data[i].active
                }


                this.setState({
                    mapData: data,
                    resData: res.data
                })
            })
            .catch(err => console.log(err))
    }




    handleToolTip = (event, label, code) => {

        if (!this.props.data.globalDataLoading) {


            let country = this.state.resData.filter(data => data.countryInfo.iso2 === code)

            if (this.state.mapData[code]) {
                label.html(
                    '<b>' + label.html() + '</b></br>' +
                    `<b>Total active cases as of ${moment(new Date()).format('L')}:  </b>` + this.state.mapData[code].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + '</b></br>' +
                    `<b> Total tests conducted in the last 7 days: ${country[0].tests.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}` + '</b></br>' +
                    `<b> Total deaths: ${country[0].deaths.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}` + '</b></br>' +
                    `<b> Total deaths today: ${country[0].todayDeaths.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}` + '</b></br>' +
                    `<b> Population: ${country[0].population.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`


                )
            }
        }
        else {
            event.preventDefault()
        }
    }


    render() {
        return (
            <div className='container my-5'>
                <VectorMap
                    map={"world_mill"}
                    backgroundColor="white" //change it to ocean blue: #0077be
                    zoomOnScroll={false}
                    containerStyle={{
                        width: "100%",
                        height: "520px"
                    }}
                    containerClassName="map"
                    regionStyle={{
                        initial: {
                            fill: "#dddddd",
                            "fill-opacity": 0.9,
                            stroke: "none",
                            "stroke-width": 0,
                            "stroke-opacity": 0
                        },
                        hover: {
                            "fill-opacity": 0.5,
                            cursor: "pointer"
                        },
                        selected: {
                            fill: "#e4e4e4" //color for the clicked country
                        },
                        selectedHover: {}
                    }}
                    regionsSelectable={false}
                    series={{
                        regions: [
                            {
                                values: Object.keys(this.state.mapData).length !== 0 && !this.props.data.globalDataLoading && this.state.mapData, //this is your data
                                scale: ['#0071A4'],
                                normalizeFunction: "polynomial"
                            }
                        ]
                    }}
                    onRegionTipShow={this.handleToolTip}
                />

            </div>
        )
    }
}

const mapStateToProps = state => ({
    data: state.data
})


export default connect(mapStateToProps, {})(Map)