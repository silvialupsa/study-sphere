import React, { useState, useEffect } from "react";
import GradeTable from "../components/GradeTable";

const fetchGrades = () => {
    return fetch("/grades/all").then((res) => res.json());
};

const fetchSchools = () => {
    return fetch("/schools/all").then((res) => res.json());
};

const GradeList = () => {
    const [grades, setGrades] = useState([]);
    const [schools, setSchools] = useState([]);

    useEffect(() => {
        fetchGrades().then((grades) => {
            console.log(grades);
            setGrades(grades);
        });
        fetchSchools().then((schools) => {
            setSchools(schools);
        });
    }, []);

    console.log(grades)
    return (
        <div>
            <GradeTable grades={grades} schools={schools}/>
        </div>
    );
};

export default GradeList;
