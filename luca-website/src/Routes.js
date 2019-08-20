import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import App from './App';
import Home from './components/Home';
import Coming from './components/Comingsoon';

class Routes extends React.Component {
    render () {
      return (
        <Switch>
            {/* <Route path="/faq" component= {Faq} /> */}
            {/* <Redirect to={App} /> */}
            <Route exact path="/" component={Home} />
            <Route path="/comingsoon" component={Coming} />
            <Route component={() => (<div>404 Not found 1</div>)} />
        </Switch>

        );
    }
}


export default Routes;