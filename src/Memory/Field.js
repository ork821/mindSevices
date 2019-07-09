import React, {Component} from 'react';
import { Col, Row } from 'react-bootstrap';
import Part from './Part'

export default class Field extends Component {
    //Component gets number (3,4 or 5) and create field 3by3, 4by4 or 5by5. It depends on selected difficulty
    constructor(props) {
        super(props);
        this.state = {
            begin: 0,
        };
    }

    componentDidUpdate(prevProps) {
        if (prevProps.array !== this.props.array) {
            this.setState({
                begin: 0
            })
        }
    }


    handleClick = () => {
        this.setState({
            begin: (this.state.begin + 1)
        })
    }

    // arrayOperation = () => {
    //     const size = this.props.difficult;
    //     let arr = [];
    //     for (let i = 1; i < ((size ** 2) + 1); i++) {
    //         arr.push(i);
    //     }
    //
    //     const newArr = [];
    //     for (let i = 0; i < size; i++) {
    //         let tmp_arr = []
    //         for (let j = 0; j < size; j++) {
    //             let pos = Math.floor(Math.random() * (arr.length));
    //             tmp_arr.push(arr[pos]);
    //             arr = arr.filter(el => el !== arr[pos])
    //         }
    //         newArr.push(tmp_arr);
    //     }
    //     return newArr
    // }
    //
    // componentDidUpdate(prevProps) {
    //     if (prevProps.difficult !== this.props.difficult){
    //         this.arrayOperation();
    //     }
    // }



    render() {
        const size = this.props.difficult;
        const list = [];
        const newArr = this.props.array


        for (let i = 0; i < size; i++) {
            let listButtons = [];
            for (let j = 0; j < size; j++) {

                listButtons.push(
                    <Part
                        number={newArr[i][j]}
                        className={this.props.className}
                        click={this.handleClick}
                        begin={this.state.begin}
                        isVisible={this.props.isVisible}
                    />)

            }
            list.push(<Col md="auto">{listButtons.map(el => {
                return el
            })}</Col>);
        }


        return (
            <Row className="justify-content-md-center">
                {list.map(el => {
                    return el;
                })}
            </Row>
        )
    }
}