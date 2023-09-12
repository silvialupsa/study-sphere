import logo from '../Study-bleu.png';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from "react";
import {Link} from "react-router-dom";

const NavBar = () => {
    const navStyle = {
        backgroundColor: 'rgb(28, 52, 84)',
    };

    const linkStyle = {
        color: 'white',
    };

    return (<nav className="navbar navbar-expand-lg navbar-light" style={navStyle}>
        <img src={logo} width={80}/>
        <button className="navbar-toggler" type="button" data-toggle="collapse"
                data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
                <li className="nav-item ">
                {/*    /!*<Link to="/" className="nav-link" style={linkStyle}>Home</Link>*!/*/}

                    <a  className="nav-link" href="/" style={linkStyle}>Home <span
                        className="sr-only">(current)</span></a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#" style={linkStyle}>Link</a>
                </li>
                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" style={linkStyle} id="navbarDropdown"
                       role="button"
                       data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Dropdown
                    </a>
                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <a className="dropdown-item" href="#" style={linkStyle}>Action</a>
                        <a className="dropdown-item" href="#" style={linkStyle}>Another action</a>
                        <div className="dropdown-divider"></div>
                        <a className="dropdown-item" href="#" style={linkStyle}>Something else here</a>
                    </div>
                </li>
                <li className="nav-item">
                    <a className="nav-link disabled" href="#" style={linkStyle}>Disabled </a>
                </li>
            </ul>
            <form className="form-inline my-2 my-lg-0">
                <div className="d-flex">
                <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                <button id="search-button" type="button" className="btn btn-primary">
                    <FontAwesomeIcon icon={faSearch} />
                </button>
                </div>
            </form>
        </div>
    </nav>);
};
export default NavBar

