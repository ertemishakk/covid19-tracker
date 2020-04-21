import React, { Component } from 'react'
import { Card, CardTitle, CardSubtitle, Form, Input, CardFooter, Button } from 'reactstrap'
import terms from '../../images/terms.png'


export default class StepOne extends Component {
    state = {

        windowWidth: 0,
        terms: false,
    }

    componentDidMount() {
        this.setState({
            windowWidth: window.innerWidth,
        })
        window.addEventListener('resize', this.updateWindowDimension);
    }
    componentWillUnmount() {
        window.removeEventListener('resize', this.updateWindowDimension);

    }
    updateWindowDimension = (e) => {
        this.setState({
            windowWidth: window.innerWidth
        })
    }

    updateTerms = (e) => {
        this.setState({
            [e.target.name]: !this.state.terms
        })
    }


    render() {

        return (
            <div>


                <img src={terms} className='pt-5' alt='terms of service ' />
                <Card className='border-0 mx-auto text-left' style={{ height: this.state.windowWidth > 680 && '500px', width: this.state.windowWidth > 680 && '550px' }}>


                    <CardTitle className='h4 font-weight-bold '>
                        Terms of Service
                            </CardTitle>
                    <CardSubtitle>
                        Before using the Checkup, remember:
                            </CardSubtitle>
                    <ul className='pt-3 pl-3'>
                        <li><span className='font-weight-bold'>
                            Checkup is not a diagnosis.
                                    </span>
                            Checkup is for informational purposes
                            only and does not represent, in any way,
                            a qualified medical opinion.
                            Checkup and its potential results
                            are entirely based on WHO and CDC
                            guidelines concerning COVID-19 only.
                                    </li>
                        <li className='pt-3'><span className='font-weight-bold'>
                            If this is an emergency, call your
                            local emergency number immediately.
                                    </span>
                            Do not proceed with this Checkup tool.
                            Medical attention is required immediately.
                                    </li>
                        <li className='pt-3'><span className='font-weight-bold'>
                            Your data is safe.
                                    </span>
                            Information that you provide is anonymous
                            and not shared with anyone.
                                    </li>
                    </ul>


                    <Form className='pl-3'>
                        <Input type='checkbox' name='terms' onChange={this.updateTerms} />
                        <span>I have read and accept the Terms of Service and Privacy Policy.</span>
                    </Form>



                    <CardFooter className='mt-4 text-right'>
                        <Button disabled={!this.state.terms} color='primary' size='lg' onClick={this.props.nextStep}>Accept</Button>
                    </CardFooter>

                </Card>



            </div>
        )
    }
}
