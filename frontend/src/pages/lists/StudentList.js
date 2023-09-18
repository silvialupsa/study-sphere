import React, {useEffect, useState} from "react";
import {Link} from 'react-router-dom'
import StudentTable from "../../components/tables/StudentTable";

const fetchStudents = () => {
    return fetch("/students/all").then((res)=> res.json())
}

const deleteStudent = (id) => {
    return fetch(`/students/delete/${id}`, { method: "DELETE" })
        .then((res) => {
            if (res.status === 200) {
                console.log("Student deleted successfully");
            } else {
                console.error("Failed to delete student");
            }
        })
        .catch((error) => {
            console.error("Error:", error);
        });
};


const StudentList = () => {
    const [students, setStudents] = useState([]);

    const handleDelete = (id) => {
        deleteStudent(id)
            .then(() => {
                // Remove the deleted student from the state
                setStudents((students) => students.filter((student) => student.id !== id));
            })
            .catch((error) => {
                console.error("Error:", error);
            });
    };



    useEffect(()=>{
        fetchStudents().then((students) => {
            setStudents(students);
    console.log(students);
        });
    },[])

    return (
        <div>
            <Link to='/createStudent'>Create Student</Link>
            <StudentTable
                students={students}
                onDelete={handleDelete}
            />
        </div>
    )
}

export default StudentList