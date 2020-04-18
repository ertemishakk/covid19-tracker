import React, { Component } from 'react'
import { Card, CardTitle, CardFooter, Button, CardBody } from 'reactstrap'
import { connect } from 'react-redux'
import Slider from 'react-rangeslider'
import 'react-rangeslider/lib/index.css'
import { setAge } from '../../actions/symptomData'

class StepThree extends Component {
    state = {
        value: 70,
    }
    handleOnChange = (value) => {
        this.setState({
            value
        })
    }

    componentDidUpdate(prevProps) {
        if (this.props.data.question !== prevProps.data.question) {
            this.props.nextStep()
        }
    }

    evaluateAnswers = (e) => {
        this.props.setAge(this.state.value, this.props.data.sex)
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

export default connect(mapStateToProps, { setAge })(StepThree)