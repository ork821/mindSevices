import React from 'react';
import ReactDOM from 'react-dom';
import Home from './Home/Home';
import Words from './WordsReverse/Words';
import Memory from './Memory/Memory'
import { Router } from "@reach/router";

const arr = ["автомобиль", "реклама", "компьютер", "слово", "игра", "паспорт", "самолет" ];

ReactDOM.render(
    <Router>
        <Home path='/'/>
        <Words words={arr} path='reverse'/>
        <Memory path='memory'/>
    </Router>,
    document.getElementById('root'));
