import React, {Component} from 'react';
import {Container, Row, Col, Button} from 'react-bootstrap';
import Word from './Word';



export default class Words extends Component {


    constructor(props) {
        super(props);
        this.state = {
            word: "Привет!",
            isVisible: true,
        }
    };

    nextWord = () => {
        const {words} = this.props;
        this.setState({
            word:  words[Math.floor(Math.random() * (words.length))],
            isVisible: true
        });
    };




    showAgain = () => {
        this.setState({
            isVisible: true
        });
    };

    Hide = () =>  {
        this.setState({
            isVisible: false
        })
    }

    componentDidMount() {
        setTimeout(this.Hide, 3000);
    }

    componentDidUpdate(){
        setTimeout(this.Hide, 3000);
    }



    render() {
        return(
            <Container>
                <Row  className="justify-content-md-center">
                    <h2>Words Reverse</h2>
                </Row>
                <Row  className="justify-content-md-center">
                    <Col md="auto">
                        <Button variant="danger" onClick={this.showAgain}>Show Again</Button>
                    </Col>

                    <Col lg="5">
                        <Word word={this.state.word} isVisible={this.state.isVisible}/>
                    </Col>

                    <Col md="auto">
                        <Button variant="success" onClick={this.nextWord}>Next Word</Button>
                    </Col>
                </Row>
            </Container>


        )
    }
}