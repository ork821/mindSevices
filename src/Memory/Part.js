import React, {Component} from 'react';
import {Alert} from 'react-bootstrap';

export default class Part extends Component {
    constructor(props) {
        super(props)
        this.state = {
            className: this.props.className,
            text: this.props.number,
            isVisible: true
        }
    }

    componentDidUpdate(prevProps){
        if (prevProps.isVisible !== this.props.isVisible){
            let isVisible = this.props.isVisible
            let className = isVisible ? this.props.className : "fade alert alert-secondary show"
            let text = isVisible ? this.props.number : '?'
            this.setState({
                className: className,
                text: text,
                isVisible: isVisible
            })
        }
    }
    componentDidMount() {
        let isVisible = this.props.isVisible
        let className = isVisible ? this.props.className : "fade alert alert-secondary show"
        let text = isVisible ? this.props.number : '?'
        this.setState({
            className: className,
            text: text,
            isVisible: isVisible
        })
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
            this.props.click()

        } else {
            this.setState({
                className: "fade alert alert-danger show"
            })
        }
    }


    render() {
        let number = this.props.number
        let isVisible = this.state.isVisible



        return (
            <Alert className={this.state.className} onClick={!isVisible ? this.onClick : ''}>
                {this.state.text}
            </Alert>
        )


    }
}