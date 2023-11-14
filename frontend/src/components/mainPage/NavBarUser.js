import React from "react";
import {NavDropdown} from "react-bootstrap";
import logo from '../../images/white-no-bg.png';
import {useNavigate} from 'react-router-dom';
import profilePicture from "../../images/profilePicture.png";

const NavBar = () => {
    const navigate = useNavigate();
    const handleLogOutButton = (school) => {
        localStorage.removeItem("user");
        localStorage.removeItem("token");
        navigate("/login")
    };

    const goToMyProfile = () => {
        const user = JSON.parse(localStorage.getItem("user"));
        if (user && user.id) {
            navigate(`/myProfile/${user.id}`);
        } else {
            console.error("User ID not found");
        }
    };
    return (<div>
        <nav className="navbar navbar-expand-md navbar-light nav-underline">
            <div className="container-fluid ">
                <img id="logo" src={logo} width={80} alt="logo"/>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText"
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
                            <div className="thumbnail" style={{backgroundColor: "#f1b708"}}>

                            </div>
                        </li>
                        <li className="nav-item">
                            <button className="get-started mx-3" onClick={handleLogOutButton}>
                                Log out
                            </button>
                        </li>
                        <div className="d-flex align-items-center">
                            <img
                                src={profilePicture}
                                alt="profile"
                                style={{ width: '50px', height: '50px', borderRadius: '50%', marginRight: '10px' }}
                            />
                            <li className="nav-item">
                                <button className="my-profile mx-3" onClick={goToMyProfile}>My Profile </button></li>
                        </div>
                    </ul>
                </div>
            </div>
        </nav>
    </div>);
};

export default NavBar;
