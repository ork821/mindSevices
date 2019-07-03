import React, {Component} from 'react';
import {Row} from 'react-bootstrap';
import ButRow from './ButtonRow'

export default class Field extends Component{
    //Component gets number (3,4 or 5) and create field 3by3, 4by4 or 5by5. It depends on selected difficulty
    constructor(props) {
        super(props);
        this.state = {
            number: [],
            variant: 'primary',

        };
    }

    componentWillMount() {
        let size = this.props.difficult;
        for (let i = 1; i < ((size**2)+1); i++) {
            this.state.number.push(i);
        }
    }



    render() {
        let arr = this.state.number;
        let size = this.props.difficult;
        let list = []
        for (let i = 0; i < size; i++) {
            list.push(<ButRow size={size} variant={this.state.variant} arr={arr}/>)
        }
        return(
            <Row className="justify-content-md-center">
                {list.map(el => {return el})}
            </Row>
        )
    }
}