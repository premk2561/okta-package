/*eslint-disable*/
import React from 'react';
import { Route ,Switch} from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import { Security, SecureRoute, LoginCallback } from '@okta/okta-react';
import Visitors from './components/Visitors';
import Users from './components/Users';
import Home from './components/Home';
import Login from './Login';
import { oktaAuthConfig, oktaSignInConfig } from './Config';
import { OktaAuth} from '@okta/okta-auth-js';
import RestrictedPage from './components/RestrictedPage';
import Navbar from './components/Navbar';
import LoginForm from './components/LoginForm';

const oktaAuth = new OktaAuth(oktaAuthConfig);

function App() {
    const history = useHistory();
    const customAuthHandler = () => {
        history.push('/login');
    };
    const restoreOriginalUri = async (_oktaAuth) => {  //eslint-disable-line
        history.push(history.goBack());
    };
    return (
        <Security
            oktaAuth={oktaAuth}
            onAuthRequired={customAuthHandler}
            restoreOriginalUri={restoreOriginalUri}
        >
            <Navbar />
            {/* <LoginForm /> */}
            <Switch>
                <Route path='/' exact={true} component={Home} />
                <Route path='/loginform' exact={true} component={LoginForm} />
                <Route path='/visitors' exact={true} component={Visitors} />
                <SecureRoute path='/users' exact={true} component={Users} />
                <SecureRoute path='/restricted' exact={true} component={RestrictedPage} />
                <Route path='/login' exact={true}  render={() => <Login config={oktaSignInConfig} />} />
                <Route path='/login/callback' exact={true}  component={LoginCallback} />
            </Switch>
        </Security>
    );
}

export default App;
