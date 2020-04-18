import React, { Component } from 'react'
import { Row, Col } from 'reactstrap'
// import Flip from 'react-reveal/Flip';
import moment from 'moment'

class Title extends Component {

    render() {
        let date = new Date()
        return (
            <div>
                <Row className='text-dark pt-4'>
                    <Col>
                        <h1 className='text-center pt-5 display-2 font-weight-bold'>
                            C<span>
                                <i className="fas fa-virus"></i>
                            </span>VID-19

                             </h1>
                        <h3 className='text-center'>{moment(date).format('MMMM Do YYYY')}</h3>
                    </Col>
                </Row>

            </div >
        )
    }
}


export default Title