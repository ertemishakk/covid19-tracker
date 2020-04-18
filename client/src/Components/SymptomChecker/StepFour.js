import React, { Component } from 'react'
import {
    Card, CardTitle, CardFooter, Button, CardBody,
    Form, Input, Label, FormGroup, UncontrolledTooltip
} from 'reactstrap'
import { connect } from 'react-redux'

class StepFour extends Component {
    state = {
        evidence: []
    }

    updateEvidence = (e) => {
        var data = [...this.state.evidence]
        var index = data.findIndex(element => element.id === e.target.name)
        if (data[index]) {
            data.splice(index, 1)
            this.setState({
                evidence: data
            })
        }
        else {
            var newData = {
                'id': `${e.target.name}`,
                'choice_id': 'present'

            }
            this.setState({
                evidence: [
                    ...this.state.evidence, newData
                ]
            })
        }
    }

    evaluateAnswers = (e) => {

        this.props.setAge(this.state.value, this.props.data.sex)
    }

    render() {
        return (
            <div>
                <Card className='pt-5 border-0'>
                    <CardTitle className='h4 font-weight-bold mb-5 '>
                        {this.props.data.questions.text}
                    </CardTitle>

                    <CardBody className=' text-left mx-auto h5'>
                        <Form>
                            {Object.keys(this.props.data.questions).length !== 0 && this.props.data.questions.items.map(eachQuestion => (
                                <FormGroup check key={eachQuestion.id}>
                                    <Label check>
                                        <Input type="checkbox" name={eachQuestion.id} onChange={this.updateEvidence} />
                                        {eachQuestion.name}
                                        {eachQuestion.explanation !== null && (
                                            <React.Fragment>

                                                <i href="#" className="fas fa-exclamation-circle pl-2 text-danger" id={eachQuestion.id} ></i>
                                                <UncontrolledTooltip placement="right" target={eachQuestion.id} >
                                                    {eachQuestion.explanation}
                                                </UncontrolledTooltip>
                                            </React.Fragment>
                                        )}
                                    </Label>
                                </FormGroup>
                            ))}
                        </Form>
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


export default connect(mapStateToProps, {})(StepFour)