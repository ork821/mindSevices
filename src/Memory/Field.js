import React, {Component} from 'react';
import {Row} from 'react-bootstrap';
import ButRow from './ButtonRow'

export default class Field extends Component{
    //Component gets number (3,4 or 5) and create field 3by3, 4by4 or 5by5. It depends on selected difficulty
    constructor(props) {
        super(props);
        this.state = {
            array: [],
            variant: 'primary',
            newArr: []
        };
    }

    componentDidMount() {
        const arr = [];
        const size = this.props.difficult;
        for (let i = 1; i < ((size ** 2) + 1); i++) {
            arr.push(i);
        }
        this.setState({
            array: arr
        })
    }



    // newArr = () => {
    //     let size = this.props.difficult;
    //     let arr = this.state.array;
    //     const newArr = []
    //     for (let i = 0; i < size; i++) {
    //         let pos = Math.floor(Math.random()*(arr.length));
    //         console.log('pos - ' + pos)
    //         newArr.push(arr[pos]);
    //         arr.splice(pos, 1); // 0 - индекс, 1 - кол-во удаляемых элементов
    //     }
    //
    //     return newArr
    // }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.difficult !== this.props.difficult){
            const arr = [];
            const size = this.props.difficult;
            for (let i = 1; i < ((size ** 2) + 1); i++) {
                arr.push(i);
            }
            this.setState({
                array: arr
            })
        }
    }




    render() {
        let size = this.props.difficult;
        let list = [];


        for (let i = 0; i < size; i++) {
            list.push(
                <ButRow size={size} variant={this.state.variant}/>
            );
        }
        return(
            <Row className="justify-content-md-center">
                {list.map(el => {
                    return el;
                })}
            </Row>
        )
    }
}