import React, {Component} from 'react';
import {Alert} from 'react-bootstrap';

export default class Part extends Component {
    constructor(props) {
        super(props)
        this.state = {
            className: this.props.className,
            text: this.props.text,
            isVisible: this.props.isVisible
        }
    }


    onClick = () => {
        let number = this.props.number
        console.log('1')
        let begin = this.props.begin
        if (number === (begin + 1)) {
            this.setState({
                className: "fade alert alert-success show",
                text: number,
                isVisible: true
            })

        } else {
            this.setState({
                className: "fade alert alert-danger show"
            })
        }
    }



    render() {
        let number = this.props.number
        let isVisible = this.state.isVisible
        let text = isVisible ? number : '?'
        let className = isVisible ? this.state.className : "fade alert alert-secondary show"


        return (
            <Alert className={className} onClick={!isVisible ? this.onClick : ''}>
                {text}
            </Alert>
        )


    }
}