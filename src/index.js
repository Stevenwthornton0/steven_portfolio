import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import App from './components/App/App';
import './index.css';

library.add(
    faEnvelope,
    faPhone,
    faGithub,
    faLinkedin
)

ReactDOM.render(
    <BrowserRouter>
        <App /> 
    </BrowserRouter>,
document.getElementById('root'));
