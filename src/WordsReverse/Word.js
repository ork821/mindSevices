import React from 'react'
import {Alert} from 'react-bootstrap'

export default function Word(props) {
    const {isVisible} = props;
    if(isVisible){
        return <Alert variant="primary">{props.word}</Alert>;
    }
    return <Alert variant="primary">Text is hidden</Alert>


}
