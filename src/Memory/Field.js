import React, {Component} from 'react';
import {Row} from 'react-bootstrap';
import ButtonRow from './ButtonRow'

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
        console.log(newArr);

        for (let i = 0; i < size; i++) {
            list.push(<ButtonRow size={size} variant={this.state.variant} newArr={newArr[i]}/>);
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