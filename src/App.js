import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AuthContextProvider from './context/AuthContext';
import Home from './pages/Home';
import Auth from './pages/Auth';

const App = () => {
    return (
        <Router>
            <AuthContextProvider>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/auth" component={Auth} />
                </Switch>
            </AuthContextProvider>
        </Router>
    );
};

export default App;
