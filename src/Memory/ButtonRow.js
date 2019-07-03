import React, {Component} from 'react';
import {Col, Button} from 'react-bootstrap';

export default class ButtonRow extends  Component{

    render() {
        let size = this.props.size;
        let arr = this.props.arr;
        const list = [];
        for (let i = 0; i < size; i++) {
            list.push(<Button block variant={this.props.variant} size="lg" block>{arr[0]}</Button>)
        }

        return(
            <Col md="auto">
                {list.map(el => {return el})}
            </Col>
        )
    }
}
