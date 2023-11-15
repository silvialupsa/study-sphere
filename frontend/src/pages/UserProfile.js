import React, {useEffect, useState} from "react";
import UserProfileDisplay from "./UserProfileDisplay";
import {useParams} from "react-router-dom";
import 'react-calendar/dist/Calendar.css';

const fetchStudent = (id) => {
    return fetch(`/students/personId/${id}`).then((res) => res.json());
};

const fetchProfessor = (id) => {
    return fetch(`/professors/personId/${id}`).then((res) => res.json());
};

const fetchPerson = (id) => {
    return fetch(`/people/${id}`).then((res) => res.json());
}

const fetchStudentAttendance =(id)=>{
    return fetch(`/attendance/student/${id}`).then((res)=> res.json());
}

const UserProfile = () => {
    const {id} = useParams();
    const [individual, setIndividual] = useState({})
    const [person, setPerson] = useState({});
    const [attendance, setAttendance] = useState({});


    useEffect(() => {
        fetchPerson(id).then((person) => {
            setPerson(person)
        })

        if (person.role === "ROLE_STUDENT") {
            fetchStudent(id).then((student) => {
                setIndividual(student);
                console.log("student.id: "+student.id)

                fetchStudentAttendance(student.id).then((attendance)=>{
                    setAttendance(attendance);
                })
            });


        } else if (person.role === "ROLE_PROFESSOR") {
            fetchProfessor(id).then((professor) => {
                setIndividual(professor)
            })
        }
    }, [id, person.role]);
    console.log("att in usser profile "+attendance.date)

    return (
        <div>
            <UserProfileDisplay
                individual={individual}
                attendance={attendance}
            />
        </div>
    );
};

export default UserProfile;
