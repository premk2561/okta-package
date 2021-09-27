import React, { useEffect, useState } from 'react';



function Users() {
    const [user, setUser] = useState('');
    useEffect(() => {
        let userdata = JSON.parse(localStorage.getItem('okta-token-storage'));
        setUser(userdata.idToken.claims.email);
    }, [setUser]);
    return (
        <div>
            <h1 className='text-success text-center'>Welcome {user}</h1>
            <div className='p-5'>
                <ul className="list-group">
                    <li className="list-group-item active text-center" aria-current="true">Authorized users</li>
                    <li className="list-group-item">Prem Kumar</li>
                    <li className="list-group-item">Hari</li>
                    <li className="list-group-item">Sabitha</li>
                    <li className="list-group-item">Ramachandra</li>
                    <li className="list-group-item">Vaibhav</li>
                    <li className="list-group-item">Hushen</li>
                    <li className="list-group-item">Usha</li>
                </ul>
            </div>
        </div>
    );
}

export default Users;
