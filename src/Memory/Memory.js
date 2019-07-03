import React, {Component} from 'react';
import {Container, Row, Col, ProgressBar, Form} from 'react-bootstrap';
import Field from './Field'

export default class Memory extends Component{
    constructor(props) {
        super(props);
        this.state = {
            difficult: 3,
        };
    }

    onChange = (e) => {
        this.setState({
            difficult: e.target.value,
        });
    };

    render() {
        return(
            <Container>
                <Row className="justify-content-md-center">
                    <h2>Improve your memory</h2>
                </Row>
                <Row className="justify-content-md-center">
                    <Col sm="9">
                        <Form.Group controlId="exampleForm.ControlSelect1">
                            <Form.Label>Difficulty</Form.Label>
                            <Form.Control as="select" onChange={this.onChange}>
                                <option value='3'>Easy</option>
                                <option value='4'>Medium</option>
                                <option value='5'>Hard</option>
                            </Form.Control>
                        </Form.Group>
                    </Col>
                </Row>

                <Field difficult={this.state.difficult}/>

            </Container>
        )
    }
}