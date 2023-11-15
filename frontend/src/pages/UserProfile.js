import React, {useEffect, useState} from "react";
import UserProfileDisplay from "./UserProfileDisplay";
import {useParams} from "react-router-dom";


const fetchStudent = (id) => {
    return fetch(`/students/personId/${id}`).then((res) => res.json());
};

const fetchProfessor = (id) => {
    return fetch(`/professors/personId/${id}`).then((res) => res.json());
};

const fetchPerson = (id) => {
    return fetch(`/people/${id}`).then((res) => res.json());
}

const UserProfile = () => {
    const {id} = useParams();
    // const [role, setRole] = useState(null);
    const [individual, setIndividual] = useState({})
    const [person, setPerson] = useState({});
    console.log(individual)

    useEffect(() => {
        fetchPerson(id).then((person) => {
            setPerson(person)
        })

        if (person.role === "ROLE_STUDENT") {
            fetchStudent(id).then((student) => {
                setIndividual(student)
            });
        } else if (person.role === "ROLE_PROFESSOR") {
            fetchProfessor(id).then((professor) => {
                setIndividual(professor)
            })
        }
    }, [id, person.role]);
    return (
        <div>
            <UserProfileDisplay individual={individual}/>
        </div>
    );
};

export default UserProfile;
