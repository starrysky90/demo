'use strict';

import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';

import App from './components/App';
import './styles';

const renderApp = () => {
    render(
        <AppContainer>
            <App />
        </AppContainer>,
        document.getElementById("root")
    );
}
renderApp();

if(module.hot){
    module.hot.accept("./components/App",()=>{
        renderApp();
    });
}