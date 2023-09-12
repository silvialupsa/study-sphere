import logo from '../Study-bleu.png';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from "react";
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { Link } from "react-router-dom";

const NavBar = () => {
    const navStyle = {
        backgroundColor: 'rgb(28, 52, 84)',
    };

    const linkStyle = {
        color: 'white',
    };

    const dropdownStyle = {
        backgroundColor: 'rgb(28, 52, 84)', // Apply the same background color as the navbar
        border: 'none', // Remove the border if necessary
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-light" style={navStyle}>
            <img src={logo} width={80} />
            <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item ">
                        <a className="nav-link" href="/" style={linkStyle}>
                            Home <span className="sr-only">(current)</span>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#" style={linkStyle}>
                            About Us
                        </a>
                    </li>
                    <DropdownButton
                        id="dropdown-button-light-example2"
                        variant="$blue-700"
                        title="Features"
                        className="mt-2"
                        data-bs-theme="dark"
                    >
                        <Dropdown.Item href="#/action-1">Feature 1</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Feature 2</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Feature 3</Dropdown.Item>
                    </DropdownButton>
                    <li className="nav-item">
                        <a className="nav-link disabled" href="#" style={linkStyle}>
                            Plans
                        </a>
                    </li>
                </ul>
                <form className="form-inline my-2 my-lg-0">
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
        </nav>
    );
};

export default NavBar;
