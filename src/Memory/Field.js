import React, {Component} from 'react';
import {Button, Col, Row, Alert} from 'react-bootstrap';

export default class Field extends Component {
    //Component gets number (3,4 or 5) and create field 3by3, 4by4 or 5by5. It depends on selected difficulty
    constructor(props) {
        super(props);
        this.state = {
            variant: 'primary',
            begin: 0
        };
    }

    handleClick = (number) => {
        console.log(number);
    }



    render() {
        const size = this.props.difficult;
        const list = [];
        const newArr = this.props.array
        let isVisible = this.props.isVisible;

        for (let i = 0; i < size; i++) {
            const listButtons = [];
            for (let j = 0; j < size; j++) {
                if (isVisible) {
                    listButtons.push(
                        <Alert
                               variant={this.state.variant}>
                            {newArr[i][j]}
                        </Alert>)
                } else {
                    listButtons.push(
                        <Alert
                               variant={this.state.variant}
                               onClick={() => this.handleClick(newArr[i][j])}>
                            ?
                        </Alert>)
                }
            }
            list.push(<Col md="auto">{listButtons.map(el => {
                return el
            })}</Col>);
        }


        return (
            <Row className="justify-content-md-center">
                {list.map(el => {
                    return el;
                })}
            </Row>
        )
    }
}