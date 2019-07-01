import React from 'react';
import ReactDOM from 'react-dom';
import Home from './Home/Home';
import Words from './WordsReverse/Words';
import { Router } from "@reach/router";

const arr = ["автомодиль", "реклама", "компьютер", "слово" ];

ReactDOM.render(
    <Router>
        <Home path='/'/>
        <Words words={arr} path='reverse'/>
    </Router>,
    document.getElementById('root'));
