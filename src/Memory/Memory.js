import React, {Component} from 'react';
import {Container, Row, Col, Button, Form} from 'react-bootstrap';
import Field from './Field'

export default class Memory extends Component {
    constructor(props) {
        super(props);
        this.state = {
            difficult: 0,
            array: [],
            newArr: [],
            btnState: true //if true => 'Hide' button
        };
    }

    onChange = (e) => {
        const size = e.target.value;
        const arr = [];
        for (let i = 1; i < ((size ** 2) + 1); i++) {
            arr.push(i);
        }

        let newArr = [];
        for (let i = 0; i < size; i++) {
            const tmp_arr = []
            for (let j = 0; j < size; j++) {
                let pos = Math.floor(Math.random() * (arr.length));
                tmp_arr.push(arr[pos]);
                arr.splice(pos, 1);
            }
            newArr.push(tmp_arr);
        }

        this.setState({
            difficult: size,
            newArr: newArr,
            btnState: true
        });

    };


    arrayOperation = () => {
        const arr = [];
        const size = this.state.difficult;
        for (let i = 1; i < ((size ** 2) + 1); i++) {
            arr.push(i);
        }

        let newArr = [];
        for (let i = 0; i < size; i++) {
            const tmp_arr = []
            for (let j = 0; j < size; j++) {
                let pos = Math.floor(Math.random() * (arr.length));
                tmp_arr.push(arr[pos]);
                arr.splice(pos, 1);
            }
            newArr.push(tmp_arr);
        }
        this.setState({
            newArr: newArr
        })

    }

    handleClick = () => {
        this.setState({
            btnState: !this.state.btnState
        })
    }






    render() {

        let btnState = this.state.btnState
        let btnText = btnState ? 'Hide' : 'Show'
        let variant = btnState ? 'secondary' : 'success'

        return (
            <Container>
                <Row className="justify-content-md-center">
                    <h2>Improve your memory</h2>
                </Row>
                <Row className="justify-content-md-center">
                    <Col sm="8">
                        <Form.Group controlId="exampleForm.ControlSelect1">
                            <Form.Label>Difficulty</Form.Label>
                            <Form.Control as="select" onChange={this.onChange}>
                                <option value='0'>Choose difficulty</option>
                                <option value='3'>Easy</option>
                                <option value='4'>Medium</option>
                                <option value='5'>Hard</option>
                            </Form.Control>
                        </Form.Group>
                        <Button variant={variant}
                                onClick={this.handleClick}>{btnText}
                        </Button>
                    </Col>



                </Row>

                <Field difficult={this.state.difficult} array={this.state.newArr} isVisible={this.state.btnState}/>

            </Container>
        )
    }
}