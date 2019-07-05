import React, {Component} from 'react';
import {Button, Col, Row} from 'react-bootstrap';

export default class Field extends Component{
    //Component gets number (3,4 or 5) and create field 3by3, 4by4 or 5by5. It depends on selected difficulty
    constructor(props) {
        super(props);
        this.state = {
            variant: 'primary',
        };
    }


    render() {
        const size = this.props.difficult;
        const list = [];
        const newArr = this.props.array

        for (let i = 0; i < size; i++) {
            const listButtons = [];
            for (let j = 0; j < size; j++) {
                listButtons.push(
                    <Button block variant={this.props.variant} size="lg"block>{newArr[i][j]}
                    </Button>)
                }
            list.push(<Col md="auto">{listButtons.map(el => {return el})}</Col>);
        }

        return(
            <Row className="justify-content-md-center">
                {list.map(el => {
                    return el;
                })}
            </Row>
        )
    }
}