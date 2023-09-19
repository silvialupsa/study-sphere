import React, { useState, useEffect } from "react";
import SchoolTable from "../../components/tables/SchoolTable";
import {Link} from "react-router-dom";


const fetchSchools = () => {
    return fetch("/schools/all").then((res) => res.json());
};

const SchoolList = () => {
    const [schools, setSchools] = useState([]);

    useEffect(() => {
        fetchSchools().then((schools) => {
            setSchools(schools);
        });
    }, []);

    return (
        <div>
            <Link to={`/createSchool`}>
                <button type="button">Create School</button>
            </Link>
            <SchoolTable schools={schools}/>
        </div>
    );
};

export default SchoolList;
