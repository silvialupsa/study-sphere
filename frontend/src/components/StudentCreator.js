import { useState } from "react";
import React from 'react';
import { useNavigate } from 'react-router-dom';
import StudentForm from "./StudentForm";
import StudentList from "../Pages/StudentList";

const createStudent = (student)=> {
    return fetch("/students/",{
        method: "POST",
        headers: {
            "Content-Type": "application.json",
        },
        body:JSON.stringify(student),
    }).then((res) => res.json());
}

const StudentCreator = () => {
    const navigate = useNavigate();

    const handleCreateStudent = (student) => {
        createStudent(student).then(()=> {
            navigate("/students")
        })
    }

    return(
        <StudentForm
            onCancel={()=> navigate("/students")}
            onSave={handleCreateStudent}/>
    )
}

export default StudentCreator