import {useState, useEffect} from "react";
import { Link } from 'react-router-dom'

import StudentTable from "../components/StudentTable";

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

    return (
        <div>
            <button onClick={()=> navigate("/createStudent")}>Create Student</button>
            <StudentTable
                students={students}
                />
        </div>
    )
}

export default StudentList