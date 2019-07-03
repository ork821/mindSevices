import React, {Component} from 'react';
import {Container, Row, Col, Button, FormControl, InputGroup} from 'react-bootstrap';
import Word from './Word';


class Words extends Component {


    constructor(props) {
        super(props);
        this.state = {
            word: "Hello! Click 'New Word' to get started",
            isVisible: true,
            showAgain: true,
            newWord: false,
            reverse: ''

        }
    };

    nextWord = () => {
        const {words} = this.props;
        this.setState({
            word: words[Math.floor(Math.random() * (words.length))],
            isVisible: true,
            newWord: true,
            showAgain: true
        });
        const timer = setTimeout(this.Hide, 2000);
    };


    showAgain = () => {
        this.setState({
            isVisible: true
        });
        const timer = setTimeout(this.Hide, 1500);
    };

    Hide = () => {
        this.setState({
            isVisible: false,
            newWord: false,
            showAgain: false,
        });
    }

    onChange = (e) => {
        this.setState({
            reverse: e.target.value
        });
    }

    handleClick = () => {
        let word = this.state.word;
        let reverse = this.state.reverse;
        word = word.split("").reverse().join("");
        if (word === reverse) {
            this.setState({
                reverse: '', //input in clear
                showAgain: true, //disables button
            });
            alert('Great! Lets Try New Word');
            this.nextWord();
        } else {
            alert('Wrong, try again!');
            this.setState({
                reverse: '', //input in clear
            });
            this.showAgain();
        }
    }


    render() {
        return (
            <Container>
                <Row className="justify-content-md-center">
                    <h2>Words Reverse</h2>
                </Row>
                <Row className="justify-content-md-center">
                    <Col md="auto">
                        <Button variant="danger" disabled={this.state.showAgain} onClick={this.showAgain}>Show
                            Again</Button>
                    </Col>

                    <Col lg="5">
                        <Word word={this.state.word} isVisible={this.state.isVisible}/>
                    </Col>

                    <Col md="auto">
                        <Button variant="success" disabled={this.state.newWord} onClick={this.nextWord}>Next
                            Word</Button>
                    </Col>
                </Row>
                <Row className="justify-content-md-center">
                    <Col lg="8">
                        <InputGroup>
                            <FormControl
                                placeholder="If word is 'site', then type 'etis'"
                                aria-label="Reversed Word"
                                aria-describedby="basic-addon2"
                                onChange={this.onChange}
                                value={this.state.reverse}
                            />
                            <InputGroup.Append>
                                <Button variant="outline-success" onClick={this.handleClick}>Test</Button>
                            </InputGroup.Append>
                        </InputGroup>
                    </Col>
                </Row>
            </Container>


        )
    }
}

export default Words;