import React, {useEffect, useState} from "react";
import {useNavigate} from 'react-router-dom';
import StudentForm from "../forms/StudentForm";

const createStudent = (student) => {
    console.log("Request Data:", JSON.stringify(student));

    return fetch("/students/add", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
        },

        body: JSON.stringify(student),
    }).then((res) => res.json());
}



const fetchSchools = () => {
    return fetch("/schools/all").then((res) => res.json());
};

const fetchPeople = () => {
    return fetch("/people/all").then((res) => res.json());
};

const fetchGrades = () => {
    return fetch("/grades/all").then((res)=> res.json())
};


const StudentCreator = () => {
    const navigate = useNavigate();
    const [schools, setSchools] = useState([]);
    const [people, setPeople] = useState([]);
    const [grades, setGrades] = useState([]);


    useEffect(() => {
        fetchSchools().then((schools) => { setSchools(schools); });
        fetchPeople().then((people) => { setPeople(people); });
        fetchGrades().then((grades) => { setGrades(grades); });
    }, []);

    const handleCreateStudent = (student) => {
        createStudent(student).then(() => {
            navigate("/students")
        });
    };

    return (
        <StudentForm
            onCancel={() => navigate("/students")}
            onSave={handleCreateStudent}
            schools={schools}
            people={people}
            grades={grades}
        />
    )
}

export default StudentCreator