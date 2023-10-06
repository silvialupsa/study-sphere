import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import ImageCarousel from "../components/mainPage/ImageCarousel";
import PartnersCarousel from "../components/mainPage/PartnersCarousel";
import Cookies from 'js-cookie';
import {useEffect} from "react";

const WelcomePage = () => {
    const [role, setRole] = useState('');

    useEffect(() => {
        // console.log(Cookies);
        const authStateCookie = Cookies.get('_auth`_state');
        // console.log(authStateCookie);
        if (authStateCookie) {
            const authState = JSON.parse(authStateCookie);
            const userRole = authState.role;
            // console.log(userRole);
            setRole(userRole);
        } else {
            console.log('authState cookie not found or does not contain a role.');
        }
    }, []);

    return (
        <div className="container" backgroundcolor="red">
            <div className="row">
                <div className="col-md-6 offset-md-3 text-center">
                    <h1>Welcome to Our School</h1>
                    <p>This is the welcome page of our school website.</p>
                    {role === "STUDENT" ?
                        <div>
                            <Link to="/students" className="btn btn-primary">Go to Student List</Link>
                        </div>
                            :
                        role === "PROFESSOR" ?
                            <div>
                                <Link to="/students" className="btn btn-primary">Go to Student List</Link>
                                <Link to="/parents" className="btn btn-primary">Go to Parent List</Link>
                                <Link to="/professors" className="btn btn-primary">Go to Professor List</Link>
                            </div> :
                            <div>
                                <Link to="/students" className="btn btn-primary">Go to Student List</Link>
                                <Link to="/students" className="btn btn-primary">Go to Student List</Link>
                                <Link to="/parents" className="btn btn-primary">Go to Parent List</Link>
                                <Link to="/grades" className="btn btn-primary">Go to Grade List</Link>
                                <Link to="/schools" className="btn btn-primary">Go to School List</Link>
                                <Link to="/inspectorates" className="btn btn-primary">Go to Inspectorates List</Link>
                                <Link to="/professors" className="btn btn-primary">Go to Professor List</Link>
                            </div>
                    }

                    <ImageCarousel/>
                    <PartnersCarousel/>
                </div>
            </div>
        </div>
    );
};

export default WelcomePage;


