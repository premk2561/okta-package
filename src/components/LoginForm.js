import React, { useState } from 'react';
import { useOktaAuth } from '@okta/okta-react';
import { useHistory } from 'react-router-dom';

const LoginForm = () => {
    const history = useHistory();
    const { oktaAuth } = useOktaAuth();
    const [sessionToken, setSessionToken] = useState();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        oktaAuth.signInWithCredentials({ username, password })
            .then(res => {
                const sessionToken = res.sessionToken;
                setSessionToken(sessionToken);
                // sessionToken is a one-use token, so make sure this is only called once
                oktaAuth.signInWithRedirect({ sessionToken });
                history.push('/');
            })
            .catch(err => console.log('Found an error', err));
    };

    const handleUsernameChange = (e) => {
        setUsername(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    if (sessionToken) {
        // Hide form while sessionToken is converted into id/access tokens
        return null;
    }

    return (
        <div className='p-5'>
            <form onSubmit={handleSubmit}>
                <label className='form-label'>
                    Username:
                </label>
                <input className='form-control'
                    id="username" type="text"
                    value={username}
                    onChange={handleUsernameChange} />
                <label className='form-label'>
                    Password:
                </label>
                <input className='form-control'
                    id="password" type="password"
                    value={password}
                    onChange={handlePasswordChange} />
                <button className='btn btn-success mt-2' type='submit' >SignIn</button>
            </form>
        </div>
    );
};
export default LoginForm;
