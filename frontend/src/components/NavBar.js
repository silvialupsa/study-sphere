import logo from '../white-no-bg.png';
import {faSearch} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import React from "react";
import Button from 'react-bootstrap/Button';
import {NavDropdown} from "react-bootstrap";


const NavBar = () => {


    return (
        <nav className="navbar navbar-expand-lg navbar-light nav-underline">
            <img src={logo} width={80} alt="logo" />
            <div className="container d-flex justify-content-center align-items-center">
                <a className="nav-link mx-3" href="/">
                    Home <span className="sr-only">(current)</span>
                </a>
                <a className="nav-link mx-3" href="#">
                    About Us
                </a>
                <NavDropdown title="Dropdown" id="basic-nav-dropdown" >
                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">
                        Another action
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">
                        Separated link
                    </NavDropdown.Item>
                </NavDropdown>
                <a className="nav-link mx-3" href="#">
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
                <Button className="log-in mx-3">
                    Log in
                </Button>
                <Button className="get-started mx-3">
                    Get started
                </Button>
            </div>
        </nav>
    );
};

export default NavBar;
