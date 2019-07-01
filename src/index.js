import React from 'react';
import ReactDOM from 'react-dom';
import Home from './Home/Home'
import Words from './VoiceSpell/Words'
import { Router } from "@reach/router"

ReactDOM.render(
    <Router>
        <Home path='/'/>
        <Words path='reverse'/>
    </Router>, document.getElementById('root'));
