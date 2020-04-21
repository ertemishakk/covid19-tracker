import React, { Component } from 'react'
import {
    Card, CardTitle, CardFooter, Button, CardBody,
    Form, Input, Label, FormGroup, UncontrolledTooltip, Col, Row
} from 'reactstrap'
import { connect } from 'react-redux'
import { stopFetching, fetchData, setEvidence, setPage } from '../../actions/symptomData'
import Response from './Response'


class RestofSteps extends Component {

    state = {
        evidence: [],
        itemIds: [],
        windowWidth: 0,
        selected: ''

    }

    componentDidMount() {
        this.setState({
            windowWidth: window.innerWidth,
        })
        window.addEventListener('resize', this.updateWindowDimension);

        if (this.props.data.questions) {
            let evidence = [...this.props.data.evidence]
            if (this.props.data.questions.type === 'group_multiple') {
                for (let i = 0; i < this.props.data.questions.items.length; i++) {

                    let data = {
                        id: this.props.data.questions.items[i].id,
                        choice_id: 'absent'
                    }
                    evidence.push(data)
                }
            }
            else if (this.props.data.questions.type === 'group_single' || this.props.data.questions.type === 'single') {

                let itemIds = []
                for (let i = 0; i < this.props.data.questions.items.length; i++) {

                    let data = {
                        id: this.props.data.questions.items[i].id,
                    }
                    itemIds.push(data)
                }
                this.setState({
                    itemIds, evidence
                })
            }

        }




    }
    componentWillUnmount() {
        window.removeEventListener('resize', this.updateWindowDimension);

    }
    updateWindowDimension = (e) => {
        this.setState({
            windowWidth: window.innerWidth
        })
    }


    componentDidUpdate(prevProps) {

        if (this.props.data.response !== prevProps.data.response) {
            this.props.nextStep()

        }

        if (this.props.data.stopFetching !== prevProps.data.stopFetching) {
            this.props.previousStep()
        }

        if (this.props.data.questions !== prevProps.data.questions) {
            let evidence = [...this.props.data.evidence]

            if (this.props.data.questions.type === 'group_multiple') {
                for (let i = 0; i < this.props.data.questions.items.length; i++) {

                    let data = {
                        id: this.props.data.questions.items[i].id,
                        choice_id: 'absent'
                    }
                    evidence.push(data)
                }
            }
            else if (this.props.data.questions.type === 'group_single' || this.props.data.questions.type === 'single') {

                let itemIds = []
                for (let i = 0; i < this.props.data.questions.items.length; i++) {

                    let data = {
                        id: this.props.data.questions.items[i].id,
                    }
                    itemIds.push(data)
                }
                this.setState({
                    itemIds
                })
            }
            this.setState({
                evidence,
                selected: ''
            })
        }
        if (this.props.data.pages !== prevProps.data.pages) {
            this.props.nextStep()
        }

    }

    // previous = (e) => {
    //     if (this.props.data.stopFetching) {
    //         this.props.previousStep()
    //     }
    //     else {
    //         this.props.stopFetching()
    //     }
    // }

    evaluateAnswers = (e) => {



        let data = {
            evidence: this.state.evidence,
            sex: this.props.data.sex,
            age: this.props.data.age
        }
        this.props.setEvidence(data)
        this.props.fetchData(data)
    }


    updateEvidence = (e, label) => {
        var data = [...this.state.evidence]
        var itemIds = [...this.state.itemIds]
        var index = data.findIndex(element => element.id === e.target.name)
        var question = {}

        if (this.props.data.questions.type === 'group_multiple') {

            if (data[index].choice_id === 'absent') {
                data[index].choice_id = 'present'
            } else {
                data[index].choice_id = 'absent'
            }

        }
        else if (this.props.data.questions.type === 'group_single') {

            question = {
                id: e.target.name,
                choice_id: 'present'
            }
            data.push(question)

            var rest = itemIds.filter(item => item.id !== e.target.name)
            for (var i = 0; i < rest.length; i++) {
                index = data.findIndex(item => item.id === rest[i].id)
                if (index >= 0) {
                    data.splice(index, 1)
                }
            }


        }
        else if (this.props.data.questions.type === 'single') {


            if (!data[index]) {
                if (label === 'Yes') {
                    question = {
                        id: e.target.name,
                        choice_id: 'present'
                    }
                } else {
                    question = {
                        id: e.target.name,
                        choice_id: 'absent'
                    }
                }
                data.push(question)

            }
            else {
                if (data[index].choice_id === 'present' && label === 'No') {
                    data[index].choice_id = 'absent'
                }
                else if (data[index].choice_id === 'absent' && label === 'Yes') {
                    data[index].choice_id = 'present'
                }
            }
        }

        this.setState({
            evidence: data,
            selected: label
        })

    }




    render() {
        console.log(this.props)
        return (
            <div>
                {this.props.data.response.length === 0 && this.props.data.questions.type === 'group_multiple' && (
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
                                            {eachQuestion.explanation && eachQuestion.explanation !== null && (
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
                            {/* <Button color='info' outline size='lg' className='float-left' onClick={this.previous}>
                                <i className="fas fa-chevron-left pr-1"></i>
                                Back</Button> */}
                            <Button color='success' size='lg' className='float-right'
                                onClick={this.evaluateAnswers}
                            >
                                Next
                                           <i className="fas fa-chevron-right pl-1 text-light"></i>
                            </Button>
                        </CardFooter>
                    </Card>
                )}

                {this.props.data.response.length === 0 && this.props.data.questions.type === 'group_single' && (
                    <Card className='pt-5 border-0'>
                        <CardTitle className='h4 font-weight-bold mb-5 '>
                            {this.props.data.questions.text}
                        </CardTitle>
                        <CardBody className=' text-center h5 '>


                            {Object.keys(this.props.data.questions).length !== 0 && this.props.data.questions.items.map(eachQuestion => (
                                <Row key={eachQuestion.id} style={{ marginLeft: this.state.windowWidth > 680 && '15%', marginRight: this.state.windowWidth > 680 && '15%' }}>
                                    <Col className='py-3'>
                                        {eachQuestion.name}
                                        {eachQuestion.explanation && eachQuestion.explanation !== null && (
                                            <React.Fragment>

                                                <i href="#" className="fas fa-exclamation-circle pl-2 text-danger" id={eachQuestion.id} ></i>
                                                <UncontrolledTooltip placement="right" target={eachQuestion.id} >
                                                    {eachQuestion.explanation}
                                                </UncontrolledTooltip>



                                            </React.Fragment>

                                        )}
                                    </Col>

                                    <Col className='py-3'>

                                        <Form>
                                            <FormGroup>
                                                <Label className='ml-5 '>
                                                    <Input type='radio' name={eachQuestion.id}
                                                        checked={this.state.evidence.filter(item => item.id === eachQuestion.id).length > 0}
                                                        onChange={this.updateEvidence} />
                                                </Label>
                                            </FormGroup>
                                        </Form>

                                    </Col>
                                </Row>
                            ))}


                        </CardBody>

                        <CardFooter className='mt-5'>

                            {/* <Button color='info' outline size='lg' className='float-left' onClick={this.previous}>
                                <i className="fas fa-chevron-left pr-1"></i>
                                Back</Button> */}

                            <Button color='success' size='lg' className='float-right'
                                disabled={this.state.evidence.filter(item => item.choice_id === '').length > 0}
                                onClick={this.evaluateAnswers}
                            >
                                Next
                          <i className="fas fa-chevron-right pl-1 text-light"></i>
                            </Button>



                        </CardFooter>
                    </Card>
                )}

                {this.props.data.response.length === 0 && this.props.data.questions.type === 'single' && (

                    <Card className='pt-5 border-0'>
                        <CardTitle className='h4 font-weight-bold '>
                            {this.props.data.questions.text}
                        </CardTitle>


                        {Object.keys(this.props.data.questions).length !== 0 && this.props.data.questions.items.map(eachQuestion => (

                            <Form className='pt-5 mb-5'>

                                {eachQuestion.choices.map(eachLabel => (
                                    <Label key={eachLabel.label}
                                        className='mr-3 border'
                                        style={{
                                            cursor: 'pointer', padding: '5%',
                                            backgroundColor: this.state.selected === eachLabel.label &&

                                                'rgb(232,232,232)'
                                        }}
                                    >
                                        <Input type='radio' className='d-none' name={eachQuestion.id} onClick={(e) => this.updateEvidence(e, eachLabel.label)} />
                                        {eachLabel.label === 'Yes' ? (
                                            <i className="fas fa-check fa-3x text-success"></i>
                                        ) :
                                            (
                                                <i className="fas fa-times fa-3x text-danger"></i>
                                            )}
                                        <p> {eachLabel.label}</p>
                                    </Label>
                                ))}

                            </Form>


                        ))}



                        <CardFooter className='mt-5'>
                            {/* <Button color='info' outline size='lg' className='float-left' onClick={this.previous}>
                                <i className="fas fa-chevron-left pr-1"></i>
                                Back</Button> */}
                            <Button color='success' size='lg' className='float-right' onClick={this.evaluateAnswers}>
                                Next
                              <i className="fas fa-chevron-right pl-1 text-light"></i>
                            </Button>
                        </CardFooter>
                    </Card>
                )}

                {this.props.data.response.length !== 0 && <Response />}

            </div>
        )
    }
}

const mapStateToProps = state => ({
    data: state.symptomData
})

export default connect(mapStateToProps, { stopFetching, fetchData, setEvidence, setPage })(RestofSteps)