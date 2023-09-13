import logo from '../white-no-bg.png';
import {faSearch} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import React from "react";
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Button from 'react-bootstrap/Button';


const NavBar = () => {
    const navStyle = {
        backgroundColor: 'rgb(28, 52, 84)',
    };

    const linkStyle = {
        color: 'white',
    };

    const redButtonStyle = {
        backgroundColor: 'red',
        borderColor: 'white',
    };

    const loginButtonStyle = {
        backgroundColor: 'green',
        borderColor: 'green',
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-light" style={navStyle}>
            <img src={logo} width={80} alt="logo" />
            <div className="container d-flex justify-content-center align-items-center">
                <a className="nav-link mx-3" href="/" style={linkStyle}>
                    Home <span className="sr-only">(current)</span>
                </a>
                <a className="nav-link mx-3" href="#" style={linkStyle}>
                    About Us
                </a>
                <DropdownButton
                    id="dropdown-button-light-example2"
                    variant="$blue-700"
                    title="Features"
                    data-bs-theme="dark"
                    className="mx-3"
                >
                    <Dropdown.Item href="#/action-1">Feature 1</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Feature 2</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Feature 3</Dropdown.Item>
                </DropdownButton>
                <a className="nav-link disabled mx-3" href="#" style={linkStyle}>
                    Plans
                </a>
                <form className="form-inline my-2 my-lg-0 mx-3">
                    <div className="d-flex">
                        <input
                            className="form-control mr-sm-2"
                            type="search"
                            placeholder="Search"
                            aria-label="Search"
                        />
                        <button id="search-button" type="button" className="btn btn-primary">
                            <FontAwesomeIcon icon={faSearch} />
                        </button>
                    </div>
                </form>
            </div>
            <div className="container justify-content-end">
                <Button style={loginButtonStyle} className="mx-3">
                    Log in
                </Button>
                <Button style={redButtonStyle} className="mx-3">
                    Get started
                </Button>
            </div>
        </nav>
    );
};

export default NavBar;
