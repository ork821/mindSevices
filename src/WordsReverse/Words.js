import React, {Component} from 'react'
import {Container, Row, Col, Button} from 'react-bootstrap'
import Word from './Word'

export default class Words extends Component {
    


    render() {
        return(
            <Container>
                <Row  className="justify-content-md-center">
                    <h2>Words Reverse</h2>
                </Row>
                <Row  className="justify-content-md-center">
                    <Col md="auto">
                        <Button variant="danger">Show Again</Button>
                    </Col>

                    <Col lg="5">
                       <Word word=""/>
                    </Col>

                    <Col md="auto">
                        <Button variant="success">Next Word</Button>
                    </Col>
                </Row>
            </Container>


        )
    }
}