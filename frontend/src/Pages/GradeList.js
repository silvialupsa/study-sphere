import React, { useState, useEffect } from "react";
import GradeTable from "../components/GradeTable";

const fetchGrades = () => {
    return fetch("/grades/all").then((res) => res.json());
};


const GradeList = () => {
    const [grades, setGrades] = useState([]);

    useEffect(() => {
        fetchGrades().then((grades) => {
            console.log(grades);
            setGrades(grades);
        });

    }, []);

    console.log(grades)
    return (
        <div>
            <GradeTable grades={grades} />
        </div>
    );
};

export default GradeList;
