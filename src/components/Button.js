import React from 'react';
import { useHistory } from 'react-router-dom';
import { useOktaAuth } from '@okta/okta-react';

const Home = () => {
    const history = useHistory();
    const { oktaAuth, authState } = useOktaAuth();

    if (!authState) return null;

    const login = async () => history.push('/login');

    const logout = async () => oktaAuth.signOut();

    const button = authState.isAuthenticated ?
        <button className='btn btn-danger' onClick={logout}>Logout</button> :
        <button className='btn btn-success' onClick={login}>Login</button>;

    return (
        <div>
            {button}
        </div>
    );
};
export default Home;