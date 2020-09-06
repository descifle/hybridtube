import React, {Component} from 'react';
import LoginScreen from './auth/LoginScreen';
import CreateAccount from './auth/CreateAccount';
import VideoPlayer from './VideoPlayer';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';


class App extends Component {


    render() {
        return (
            <Router>
                <Switch>
                    <Route path={'/'} exact component={VideoPlayer} />
                    <Route path={'/login'} exact component={LoginScreen} />
                    <Route path={'/create'} exact component={CreateAccount} />
                </Switch>
            </Router>
        )
    }
}

export default App;