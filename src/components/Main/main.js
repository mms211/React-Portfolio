import React from 'react';
import { Switch, Route } from 'react-router-dom';
import AboutMe from '../About Me/aboutme';
import Portfolio from '../Portfolio/portfolio';
import Contact from '../Contact/contact';

const Main = () => (
    <Switch>
        <Route exact path="/" component={ AboutMe } />
        <Route path="/portfolio" component={ Portfolio } />
        <Route path="/contact" component={ Contact } />
    </Switch>
)

export default Main;