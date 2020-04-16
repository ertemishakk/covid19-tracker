import React, { Component } from 'react'
import { Row, Col, Container } from 'reactstrap'
import Flip from 'react-reveal/Flip';
import { connect } from 'react-redux'

class Title extends Component {

    render() {

        return (
            <div>
                <Row className='text-dark'>
                    <Col>
                        <h1 className='text-center pt-5 display-2 font-weight-bold'>
                            C<span>
                                <i className="fas fa-virus"></i>
                            </span>VID-19

                             </h1>
                    </Col>
                </Row>

            </div >
        )
    }
}

const mapStateToProps = state => ({
    data: state.data
})


export default connect(mapStateToProps)(Title)