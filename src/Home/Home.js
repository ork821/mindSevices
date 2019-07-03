import React, {Component} from 'react'
import {Container, Row, ListGroup} from 'react-bootstrap'
import Item from './Item'

export default class Home extends Component {

    render() {
        return(
            <Container>
                <Row className="justify-content-md-center">
                    <h2>List of services</h2>
                </Row>
                <Row className="justify-content-md-center">
                    <ListGroup as="ul">
                        <Item to="reverse" text="Reverse Words"/>
                        <Item to="memory" text="Improve Memory"/>
                    </ListGroup>

                </Row>
            </Container>


        )
    }


}

