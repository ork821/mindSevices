import React, {Component} from 'react';
import {Container, Row, Col, ProgressBar, Form} from 'react-bootstrap';
import Field from './Field'

export default class Memory extends Component {
    constructor(props) {
        super(props);
        this.state = {
            difficult: 3,
            array: [],
            newArr: []
        };
    }

    onChange = (e) => {
        this.setState({
            difficult: e.target.value,
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
            console.log('newArr', newArr)
        }

    }





    componentDidUpdate(prevProps, prevState) {
        if (prevState.difficult !== this.state.difficult){
            this.arrayOperation();
        }
    }


    render() {
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
            console.log('newArr', newArr)
        }

        return (
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

                <Field difficult={this.state.difficult} array={newArr}/>

            </Container>
        )
    }
}