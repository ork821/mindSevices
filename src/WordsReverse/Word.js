import React, {Component} from 'react'
import {Alert} from 'react-bootstrap'

export default class Words extends Component {
    render() {
        return(
            <Alert variant="primary"><h1>{this.props.word}</h1></Alert>
        )
    }
}