import React, { useState, useEffect } from "react";
import SchoolTable from "../components/SchoolTable";


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
            <SchoolTable schools={schools}/>
        </div>
    );
};

export default SchoolList;
