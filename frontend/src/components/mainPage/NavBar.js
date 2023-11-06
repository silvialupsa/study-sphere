import React from "react";
import {NavDropdown} from "react-bootstrap";
import logo from '../../images/white-no-bg.png';
import {useNavigate} from 'react-router-dom';

const NavBar = () => {
    const navigate = useNavigate();
    const handleLogInButton = (school) => {
        navigate("/login")
    };
    return (
        <div>
            <nav className="navbar navbar-expand-md navbar-light nav-underline">
                <div className="container-fluid ">
                    <img id="logo" src={logo} width={80} alt="logo"/>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarText"
                            aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarText">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link mx-3" href="/">
                                    Home
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link mx-3" href="#">
                                    About Us
                                </a>
                            </li>
                            <li>
                                <NavDropdown title="Features" id="basic-nav-dropdown">
                                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.2">
                                        Another action
                                    </NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                    <NavDropdown.Divider/>
                                    <NavDropdown.Item href="#action/3.4">
                                        Separated link
                                    </NavDropdown.Item>
                                </NavDropdown>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link mx-3" href="#">
                                    Plans
                                </a>
                            </li>
                            <li className="nav-item">
                                <button className="log-in mx-3" onClick={handleLogInButton}>
                                    Log in
                                </button>
                            </li>
                            <li className="nav-item">
                                <button className="get-started mx-3">
                                    Get started
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>);
};

export default NavBar;
