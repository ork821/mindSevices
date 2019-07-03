import React, {Component} from 'react';
import {Col, Button} from 'react-bootstrap';

export default class ButtonRow extends  Component{

    render() {
        const size = this.props.size;
        const arr = this.props.arr;
        const list = [];
        for (let i = 0; i < size; i++) {
            list.push(<Button block variant={this.props.variant} size="lg" block></Button>)
        }

        return(
            <Col md="auto">
                {list.map(el => {return el})}
            </Col>
        )
    }
}
