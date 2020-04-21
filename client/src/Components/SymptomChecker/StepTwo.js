import React, { Component } from 'react'
import { Card, CardTitle, Form, Input, CardFooter, Button, Label } from 'reactstrap'
import { connect } from 'react-redux'
import { setGender } from '../../actions/symptomData'
class StepTwo extends Component {

    state = {
        sex: ''
    }

    setFemale = (e) => {
        this.setState({
            sex: 'female'
        })
        this.props.setGender('female')
    }
    setMale = (e) => {
        this.setState({
            sex: 'male'
        })
        this.props.setGender('male')
    }


    render() {
        return (
            <div>
                <Card className='pt-5 border-0'>
                    <CardTitle className='h4 font-weight-bold '>
                        What is your sex?
                         </CardTitle>

                    <Form className='pt-5 mb-5'>
                        <Label className='mr-3 border' style={{ cursor: 'pointer', padding: '5%', backgroundColor: this.state.sex === 'female' && 'rgb(232,232,232)' }} onClick={this.setFemale}>
                            <Input type='radio' className='d-none' />
                            <i className="fas fa-venus fa-3x "></i>
                            <p>Female</p>
                        </Label>
                        <Label className='border' style={{ cursor: 'pointer', padding: '5%', backgroundColor: this.state.sex === 'male' && 'rgb(232,232,232)' }} onClick={this.setMale}>
                            <Input type='radio' className='d-none' />
                            <i className="fas fa-mars fa-3x "></i>
                            <p>Male</p>
                        </Label>
                    </Form>

                    <CardFooter className='mt-5'>
                        <Button color='info' outline size='lg' className='float-left' onClick={this.props.previousStep}>
                            <i className="fas fa-chevron-left pr-1"></i>
                            Back</Button>
                        <Button disabled={this.state.sex === ''} color='success' size='lg' className='float-right' onClick={this.props.nextStep}>
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

export default connect(mapStateToProps, { setGender })(StepTwo)