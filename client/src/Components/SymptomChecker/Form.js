import React, { Component } from 'react'
import { Row, Col } from 'reactstrap'
import StepOne from './StepOne';
import StepTwo from './StepTwo';
import StepThree from './StepThree';
import StepWizard from 'react-step-wizard';
import LoadingOverlay from 'react-loading-overlay';
import { connect } from 'react-redux'
import RestofSteps from './RestofSteps';


class Form extends Component {

    renderSteps = () => {
        if (this.props.data.pages.length !== 0) {
            return this.props.data.pages.map(eachStep => (
                <RestofSteps key={eachStep} />
            ))
        }
    }

    render() {
        return (
            <div>

                <Row className='pt-4' style={{ paddingRight: '15%', paddingLeft: '15%' }}>
                    <Col className='text-center mb-5' style={{ minHeight: '50vh' }}>
                        {Object.keys(this.props.data.questions).length === 0 && (
                            <LoadingOverlay
                                active={this.props.data.loading}
                                spinner
                                text='Please wait... Your answers are being evaluated..'
                            >
                                <StepWizard>
                                    <StepOne />
                                    <StepTwo />
                                    <StepThree />
                                </StepWizard>
                            </LoadingOverlay>
                        )}
                        <LoadingOverlay
                            active={this.props.data.loading}
                            spinner
                            text='Please wait... Your answers are being evaluated..'
                        >
                            <StepWizard >

                                {this.renderSteps()}

                            </StepWizard>
                        </LoadingOverlay>

                    </Col>
                </Row>

            </div>
        )
    }
}
const mapStateToProps = state => ({
    data: state.symptomData
})


export default connect(mapStateToProps, {})(Form)