import React, {useEffect, useState} from "react";
import {Link} from 'react-router-dom'
import StudentTable from "../../components/tables/StudentTable";

const fetchStudents = () => {
    return fetch("/students/all").then((res)=> res.json())
}

const StudentList = () => {
    const [students, setStudents] = useState(null);

    useEffect(()=>{
        fetchStudents().then((students) => {
            setStudents(students);
        });
    },[])

    console.log(students)

    return (
        <div>
           <Link to='/createStudent'>Create Student</Link>
            <StudentTable
                students={students}
                />
        </div>
    )
}

export default StudentList