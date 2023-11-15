import React, {useEffect, useState} from "react";
import {Link, useNavigate} from 'react-router-dom'
import StudentTable from "../../components/tables/StudentTable";
// import {CheckToken} from "../../components/CheckToken";
const fetchStudents = (navigate) => {
    return fetch("/students/all", {
        method: "GET",
        headers: {
            "Authorization": `Bearer ${localStorage.getItem("token")}`,
        },
    })
        .then((res) => res.json())
        .catch((error) => {
            navigate("/login");
        });
};

const deleteStudent = (id) => {
    return fetch(`/students/delete/${id}`, {method: "DELETE"})
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
    const specificDate = new Date();
    const formattedDate = `${specificDate.getFullYear()}-${(specificDate.getMonth() + 1)
        .toString()
        .padStart(2, "0")}-${specificDate.getDate().toString().padStart(2, "0")}`;
    const navigate = useNavigate();

    const handleDelete = (id) => {
        deleteStudent(id)
            .then(() => {
                setStudents((students) => students.filter((student) => student.id !== id));
            })
            .catch((error) => {
                console.error("Error:", error);
            });
    };
    // let i=0;

    useEffect(() => {
        // const token = localStorage.getItem("token");
        //
        // CheckToken(navigate, token).then((validToken) => {
        //     if (validToken) {
        //         console.log("getting students")
                fetchStudents(navigate).then((students) => {
                    setStudents(students);
                });
        //         console.log("i from true:" + i)
        //         i++;
        //     } else {
        //         console.log("i from false:" + i)
        //         i++;
        //     }
        // });
    }, [navigate]);


    return (
        <div>
            <Link to={`/createStudent`}>
                <button type="button" className="btn btn-info">Create Student</button>
            </Link>
            <StudentTable
                students={students}
                onDelete={handleDelete}
                date={formattedDate}
            />
        </div>
    )
}

export default StudentList