import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import ImageCarousel from "../components/mainPage/ImageCarousel";
import PartnersCarousel from "../components/mainPage/PartnersCarousel";

const WelcomePage = () => {
    const [role, setRole] = useState(JSON.parse(localStorage.getItem("user")).role);
    return (
        <div>
            <div className="container" backgroundcolor="red">
                <div className="row">
                    <div className="col-md-6 offset-md-3 text-center">
                        <h1>Welcome to Our School</h1>
                        <p>This is the welcome page of our school website.</p>
                        {role === "ROLE_STUDENT" ?
                            <div>
                                <Link to="/students" className="btn btn-primary">Go to Student List</Link>
                            </div>
                            :
                            role === "ROLE_PROFESSOR" ?
                                <div>
                                    <Link to="/students" className="btn btn-primary">Go to Student List</Link>
                                    <Link to="/parents" className="btn btn-primary">Go to Parent List</Link>
                                    <Link to="/professors" className="btn btn-primary">Go to Professor List</Link>
                                </div> :
                                role === "ROLE_ADMIN" ?
                                    <div>
                                        <Link to="/students" className="btn btn-primary">Go to Student List</Link>
                                        <Link to="/students" className="btn btn-primary">Go to Student List</Link>
                                        <Link to="/parents" className="btn btn-primary">Go to Parent List</Link>
                                        <Link to="/grades" className="btn btn-primary">Go to Grade List</Link>
                                        <Link to="/schools" className="btn btn-primary">Go to School List</Link>
                                        <Link to="/inspectorates" className="btn btn-primary">Go to Inspectorates
                                            List</Link>
                                        <Link to="/professors" className="btn btn-primary">Go to Professor
                                            List</Link>
                                    </div>
                                    :
                                    <div><h1>You do not have access to this page. Please log in.</h1></div>
                        }
                        <ImageCarousel/>
                        <PartnersCarousel/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WelcomePage;


