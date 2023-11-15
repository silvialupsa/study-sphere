import React, {useEffect, useState} from "react";
import {useNavigate, useParams} from 'react-router-dom';
import ProfessorForm from "../forms/ProfessorForm";

const updateProfessor = (professor) => {
    console.log("Request Data:", JSON.stringify(professor));

    return fetch(`/professors/update/${professor.id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },

        body: JSON.stringify(professor),
    }).then((res) => {
        if (!res.ok) {
            throw new Error(`HTTP error! Status: ${res.status}`);
        }
        return res.json();
    })
        .catch((error) => {
            console.error("Error updating professor:", error);
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

const fetchProfessor = (id) => {
    return fetch(`/professors/${id}`).then((res) => res.json())
}


const ProfessorUpdater = () => {
    const {id} = useParams();
    const navigate = useNavigate();
    const [subjects, setSubjects] = useState([]);
    const [people, setPeople] = useState([]);
    const [roles, setRoles] = useState([]);
    const [professor, setProfessor] = useState([])

    useEffect(() => {
        fetchProfessor(id).then(professor => {
            setProfessor(professor)
        })
        fetchAvailableSubjects().then((subjects) => {
            setSubjects(subjects);
        });
        fetchPeople().then((people) => {
            setPeople(people);
        });
        fetchAvailableRoles().then((roles) => {
            setRoles(roles)
        })

    }, [id]);

    const handleUpdateProfessor = (professor) => {
        updateProfessor(professor).then(() => {
            navigate("/professors")
        });
    };

    return (
        <ProfessorForm
            onCancel={() => navigate("/professors")}
            onSave={handleUpdateProfessor}
            subjects={subjects}
            people={people}
            roles={roles}
            professor={professor}
        />
    )
}

export default ProfessorUpdater