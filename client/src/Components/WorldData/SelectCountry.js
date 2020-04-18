import React, { Component } from 'react'
import { Row, Col, Form, Input, Container } from 'reactstrap'
import { connect } from 'react-redux'
import { countrySelected } from '../../actions/getData'

class SelectCountry extends Component {
    state = {
        from: 'global'
    }

    updateFrom = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
        this.props.countrySelected(e.target.value)

    }
    render() {
        console.log(this.state)
        return (
            <div>
                <Row className='pt-4' style={{ paddingRight: '15%', paddingLeft: '15%' }}>
                    <Col>
                        <Container>
                            <Form>
                                <Input type='select' name='from' value={this.state.from} onChange={this.updateFrom}>
                                    <option value='global'>GLOBAL</option>
                                    {this.props.data.countries.map(country => (
                                        <option key={country.CountryCode} value={country.Country}>{country.Country}</option>
                                    ))}

                                </Input>
                            </Form>
                        </Container>
                    </Col>
                </Row>

            </div>
        )
    }
}
const mapStateToProps = state => ({
    data: state.data
})

export default connect(mapStateToProps, { countrySelected })(SelectCountry)