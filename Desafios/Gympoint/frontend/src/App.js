import React from 'react';
import { Router } from 'react-router-dom';
import GlobalStyled from './styles/Global';
import Routes from './routes';

import history from '~/services/history';

function App() {
    return (
        <Router history={history}>
            <Routes />
            <GlobalStyled />
        </Router>
    );
}

export default App;
