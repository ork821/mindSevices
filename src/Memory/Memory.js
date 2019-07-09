import React, {Component} from 'react';
import {Container, Row, Col, Button, Form} from 'react-bootstrap';
import Field from './Field'

export default class Memory extends Component {
    constructor(props) {
        super(props);
        this.state = {
            difficult: 0,
            newArr: [],
            className: "fade alert alert-primary show",
            btnState: true //if true => 'Hide' button
        };
    }

    onChange = (e) => {
        const size = e.target.value;
        let arr = [];
        for (let i = 1; i < ((size ** 2) + 1); i++) {
            arr.push(i);
        }

        const newArr = [];
        for (let i = 0; i < size; i++) {
            let tmp_arr = []
            for (let j = 0; j < size; j++) {
                let pos = Math.floor(Math.random() * (arr.length));
                tmp_arr.push(arr[pos]);
                arr = arr.filter(el => el !== arr[pos])
            }
            newArr.push(tmp_arr);
        }
        console.log(newArr)


        this.setState({
            difficult: size,
            newArr: newArr,
            btnState: true,
            className: "fade alert alert-primary show",
        });

    };


    handleClick = () => {
        this.setState({
            btnState: !this.state.btnState
        })
    }

    reloadArray = () => {
        const size = this.state.difficult;
        let arr = [];
        for (let i = 1; i < ((size ** 2) + 1); i++) {
            arr.push(i);
        }
        const newArr = [];
        for (let i = 0; i < size; i++) {
            let tmp_arr = []
            for (let j = 0; j < size; j++) {
                let pos = Math.floor(Math.random() * (arr.length));
                tmp_arr.push(arr[pos]);
                arr = arr.filter(el => el !== arr[pos])
            }
            newArr.push(tmp_arr);
        }
        console.log(newArr)
        this.setState({
            newArr: newArr,
            className: "fade alert alert-primary show",
        })
    }


    render() {

        let btnState = this.state.btnState
        let btnText = btnState ? 'Hide' : 'Show'
        let variant = btnState ? 'secondary' : 'success'

        return (
            <Container>
                <Row className="justify-content-md-center">
                    <h2>Improove your memory</h2>
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
                                onClick={this.handleClick}>
                            {btnText}
                        </Button>
                        <Button variant="success"
                                onClick={this.reloadArray}
                                disabled={!this.state.btnState}
                        >
                            New Numbers
                        </Button>
                    </Col>


                </Row>

                <Field className={this.state.className} difficult={this.state.difficult} array={this.state.newArr}
                       isVisible={this.state.btnState}/>

            </Container>
        )
    }
}