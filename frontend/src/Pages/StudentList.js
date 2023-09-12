import {useState, useEffect} from "react";
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
            <StudentTable
                students={students}
                />
        </div>
    )
}

export default StudentList