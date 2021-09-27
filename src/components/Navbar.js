import React from 'react';
import { Link } from 'react-router-dom';
import Button from './Button';
import '../CSS/navbar.css';


function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-expand-md navbar-light bg-light">
                <div className="container-fluid">
                    <Link className="navbar-brand" to='/'>React-Okta</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav mr-auto">
                            <Link className="nav-link" to='/'>Home</Link>
                            <Link className="nav-link" to='/visitors'>Visitors</Link>
                            <Link className="nav-link" to='/users'>Authorised Users</Link>
                            <Link className="nav-link" to='/restricted'>Restricted Page</Link>
                            <Link className="nav-link" to='/loginform'>loginform</Link>
                            <div className='btn-div'>
                                <Button />
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;
