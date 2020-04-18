import React, { Component } from 'react'
import { Row, Col } from 'reactstrap'
import StepOne from './StepOne';
import StepTwo from './StepTwo';
import StepThree from './StepThree';
import StepFour from './StepFour';
import StepWizard from 'react-step-wizard';



export default class Form extends Component {
    render() {
        return (
            <div>
                <Row className='pt-4' style={{ paddingRight: '15%', paddingLeft: '15%' }}>
                    <Col className='text-center' style={{ minHeight: '75vh' }}>
                        <StepWizard>
                            <StepOne />
                            <StepTwo />
                            <StepThree />
                            <StepFour />
                        </StepWizard>
                    </Col>
                </Row>
            </div>
        )
    }
}
