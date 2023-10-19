import React, {useEffect, useState} from "react";
import {useNavigate} from 'react-router-dom';
import ProfessorForm from "../forms/ProfessorForm";

const professorCreator = (professor) => {
    console.log("Request Data:", JSON.stringify(professor));

    return fetch("/professors/register", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
        },
        body: JSON.stringify(professor),
    })
        .then((res) => {
            if (!res.ok) {
                throw new Error(`Network response was not ok: ${res.status} - ${res.statusText}`);
            }
            return res.json();
        })
        .catch((error) => {
            console.error("Error:", error);
        });
}


const fetchAvailableSubjects = () => {
    return fetch("/professors/availableSubjects").then((res) => res.json());
};

const fetchAvailableRoles = () => {
    return fetch("/people/availableRoles").then((res) => res.json());
};

const fetchPeople = () => {
    return fetch("/people/all").then((res) => res.json());
};


const ProfessorCreator = () => {
    const navigate = useNavigate();
    const [subjects, setSubjects] = useState([]);
    const [people, setPeople] = useState([]);
    const [roles, setRoles] = useState([]);

    useEffect(() => {
        fetchAvailableSubjects().then((subjects) => {
            setSubjects(subjects);
        });
        fetchPeople().then((people) => {
            setPeople(people);
        });
        fetchAvailableRoles().then((roles) => {
            setRoles(roles)
        })

    }, []);

    const handleCreateProfessor = (professor) => {
        professorCreator(professor).then(() => {
            navigate("/professors")
        });
    };

    return (
        <ProfessorForm
            onCancel={() => navigate("/professors")}
            onSave={handleCreateProfessor}
            subjects={subjects}
            people={people}
            roles={roles}
        />
    )
}

export default ProfessorCreator