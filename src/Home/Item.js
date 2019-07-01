import React, {Component} from 'react'
import {Alert} from 'react-bootstrap'


export default class Item extends Component {


    render() {
        return(
            <Alert variant="primary">
                <Alert.Link href={this.props.to}>{this.props.text}</Alert.Link>
            </Alert>
        )
    }


}

