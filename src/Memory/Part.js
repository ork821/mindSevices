import React, {Component} from 'react';
import {Alert} from 'react-bootstrap';

export default class Part extends Component {
    constructor(props) {
        super(props)
        this.state = {
            className: "fade alert alert-secondary show",
            isVisible: false,
        }
    }

    componentDidUpdate(prevProps) {
        if ((prevProps.isVisible !== this.props.isVisible) || (prevProps.className !== this.props.className) || (prevProps.number !== this.props.number)) {
            this.setState({
                className: "fade alert alert-secondary show",
                isVisible: false,
            })
        }
    }



    onClick = () => {
        let number = this.props.number
        let begin = this.props.begin
        if (number === (begin + 1)) {
            this.setState({
                className: "fade alert alert-success show",
                text: number,
                isVisible: true
            })
            this.props.click()

        } else {
            this.setState({
                className: "fade alert alert-danger show"
            })
        }
    }


    render() {
        let number = this.props.number
        let isVisible = this.props.isVisible
        let className = this.props.className
        let text = isVisible ? number : (this.state.isVisible ? number : '?')
        className = isVisible ? className : this.state.className



        return (
            <Alert className={className} onClick={!isVisible ? this.onClick : ''}>
                {text}
            </Alert>
        )


    }
}