import React, { Component } from 'react'
import Axios from 'axios'
import {
    Row, Col
} from 'reactstrap';
import Contact from './Contact';



export default class About extends Component {
    render() {
        return (
            <div className='mt-5 pt-3'>
                <Row>
                    <Col className='text-center'>
                        <Contact />
                    </Col>
                </Row>
            </div>
        )
    }
}
