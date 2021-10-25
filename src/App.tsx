import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import Switch from 'react-bootstrap/Switch';
import AppNavbar from './AppNavbar';
import Search from './Search';

function App() {
    return (
        <HashRouter>
            <AppNavbar />
            <Switch>
                <Route exact path={'/'} />
                <Route path={'/bands/:band'} />
                <Route path={'/search'} component={Search} />
            </Switch>
        </HashRouter>
    );
}

export default App;
