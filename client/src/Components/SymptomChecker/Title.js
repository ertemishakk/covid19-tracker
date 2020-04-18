import React, { Component } from 'react'
import { Row, Col } from 'reactstrap'
// import moment from 'moment'

class Title extends Component {

    render() {
        return (
            <div>
                <Row className='text-dark pt-4'>
                    <Col>
                        <h1 className='text-center pt-5 display-3 font-weight-bold'>
                            S<span>
                                <i className="fas fa-stethoscope"></i>
                            </span>MPT
                            <span>
                                <i className="fas fa-virus"></i>
                            </span>M CHECKER
                             </h1>
                    </Col>
                </Row>

            </div >
        )
    }
}


export default Title