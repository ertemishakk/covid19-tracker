import React, { Component } from 'react'
import { Card, CardTitle, CardFooter, Button, CardBody } from 'reactstrap'
import Slider from 'react-rangeslider'
import 'react-rangeslider/lib/index.css'
import { fetchData, setAge } from '../../actions/symptomData'
import { connect } from 'react-redux'


class StepThree extends Component {
    state = {
        value: this.props.data.age,
    }
    handleOnChange = (value) => {
        this.setState({
            value
        })
    }

    componentDidUpdate(prevProps) {
        if (this.props.data.pages !== prevProps.data.pages) {
            // this.props.nextStep()
        }
    }

    evaluateAnswers = (e) => {
        let data = {
            sex: this.props.data.sex,
            age: this.state.value
        }

        if (this.props.data.stopFetching) {
            if (this.props.data.age === this.state.value) {
                this.props.nextStep()
            }
            else {
                this.props.setAge(this.state.value)
                this.props.fetchData(data)
            }
        } else {
            this.props.setAge(this.state.value)
            this.props.fetchData(data)
        }
    }

    render() {
        const labels = { 18: '18', 122: '122' }

        return (
            <div>

                <Card className='pt-5 border-0'>
                    <CardTitle className='h4 font-weight-bold mb-5 '>
                        What is your age?
                         </CardTitle>

                    <Slider
                        min={18}
                        max={122}
                        value={this.state.value}
                        onChange={this.handleOnChange}
                        labels={labels}
                    />
                    <CardBody className='h4'>
                        {this.state.value}
                    </CardBody>

                    <CardFooter className='mt-5'>
                        <Button color='info' outline size='lg' className='float-left' onClick={this.props.previousStep}>
                            <i className="fas fa-chevron-left pr-1"></i>
                            Back</Button>
                        <Button color='success' size='lg' className='float-right'
                            onClick={this.evaluateAnswers}
                        // onClick={this.props.nextStep}
                        >
                            Next
                            <i className="fas fa-chevron-right pl-1 text-light"></i>
                        </Button>
                    </CardFooter>
                </Card>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    data: state.symptomData
})

export default connect(mapStateToProps, { fetchData, setAge })(StepThree)