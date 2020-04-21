import React, { Component } from 'react'
import { connect } from 'react-redux'
import { } from '../../actions/symptomData'
import {
    Col, Row
} from 'reactstrap'
class Response extends Component {
    render() {

        return (
            <div>
                {this.props.data.response.map(res =>
                    <Row className='border'>
                        <Col xs='2' className={(res.triage_level === 'no_risk' && 'bg-success') ||
                            (res.triage_level === 'self_monitoring' && 'bg-warning') ||
                            (res.triage_level === 'quarantine' && 'bg-warning') ||
                            (res.triage_level === 'isolation_call' && 'bg-danger') ||
                            (res.triage_level === 'call_doctor' && 'bg-danger') ||
                            (res.triage_level === 'isolation_ambulance' && 'bg-danger')}>

                            {(res.triage_level === 'quarantine' || res.triage_level === 'self_monitoring') &&
                                <h1 className='pt-5'><i className="fas fa-house-user text-light"></i></h1>
                            }
                            {(res.triage_level === 'isolation_call' || res.triage_level === 'call_doctor'
                                || res.triage_level === 'isolation_ambulance') &&
                                <h1 className='pt-5'><i className="fas fa-exclamation-circle text-light"></i></h1>
                            }
                            {(res.triage_level === 'no_risk') &&
                                <h1 className='pt-5'><i className="fas fa-home text-light"></i></h1>
                            }
                        </Col>
                        <Col className=' py-3'>
                            <h1 className='h5 text-left text-muted'>Recommendation</h1>
                            <h1 className='h4 text-left font-weight-bold'>{res.label}</h1>
                            <h1 className='h5 text-left text-muted'>{res.description}</h1>
                        </Col>
                    </Row>
                )}
            </div>
        )
    }
}


const mapStateToProps = state => ({
    data: state.symptomData
})


export default connect(mapStateToProps, {})(Response)