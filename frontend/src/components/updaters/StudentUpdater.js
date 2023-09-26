
import React, {useState, useEffect} from "react";
import {useNavigate, useParams} from 'react-router-dom';
import StudentForm from "../forms/StudentForm";
const updateStudent = (student) => {
    console.log("Request Data:", JSON.stringify(student));

    return fetch(`/students/update/${student.id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",},

        body: JSON.stringify(student),
    }) .then((res) => {
        if (!res.ok) {
            throw new Error(`HTTP error! Status: ${res.status}`);
        }
        return res.json();
    })
        .catch((error) => {
            console.error("Error updating student:", error);
        });
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

const fetchStudent = (id) => {
    return fetch(`/students/${id}`).then((res)=> res.json())
}
const StudentUpdater =() =>{
    const {id} = useParams();
    const navigate = useNavigate();
    const [student, setStudent] = useState(null);
    const [schools, setSchools] = useState([]);
    const [people, setPeople] = useState([]);
    const [grades, setGrades] = useState([]);

    useEffect(() => {
        fetchStudent(id).then((student)=> setStudent(student))
        // Fetch data when the component mounts
        fetchSchools().then((schools) => { setSchools(schools); });
        fetchPeople().then((people) => { setPeople(people); });
        fetchGrades().then((grades) => { setGrades(grades); });
    }, [id]);

    const handleUpdateStudent = (student) => {
        console.log(student)
        updateStudent(student).then(()=>{
            navigate("/students");
        })
    }


    return (
        <StudentForm
            student={student}
            onCancel={() => navigate("/students")}
            onSave={handleUpdateStudent}
            schools={schools}
            people={people}
            grades={grades}
        />
    )

}

export default StudentUpdater