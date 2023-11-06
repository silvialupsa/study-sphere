import React, {useEffect, useState} from "react";
import {Link} from 'react-router-dom'
import StudentTable from "../../components/tables/StudentTable";

const fetchStudents = () => {
    return fetch("/students/all", {
        method: "GET",
        headers: {
            "Authorization": `Bearer ${localStorage.getItem("token")}`,
        },
    })
        .then((res) => res.json())
        .catch((error) => {
            console.error("Error:", error);
        });
};

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
    const specificDate = new Date("2023-10-08"); // Get the current date in a readable format
    const formattedDate = `${specificDate.getFullYear()}-${(specificDate.getMonth() + 1)
        .toString()
        .padStart(2, "0")}-${specificDate.getDate().toString().padStart(2, "0")}`;

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
        });
    },[])

    return (
        <div>
            <Link to={`/createStudent`}>
                <button type="button" className="btn btn-info">Create Student</button>
            </Link>
            <StudentTable
                students={students}
                onDelete={handleDelete}
                date ={formattedDate}
            />
        </div>
    )
}

export default StudentList