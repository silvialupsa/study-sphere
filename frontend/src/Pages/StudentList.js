// import {useState, useEffect} from "react";
// import { Link } from 'react-router-dom'
// import {useNavigate} from "react-router-dom";
// import StudentTable from "../components/StudentTable";
//
// const fetchStudents = () => {
//     return fetch("/students/all").then((res)=> res.json())
// }
//
// const StudentList = () => {
//     const [students, setStudents] = useState(null);
//     const navigate = useNavigate();
//
//     useEffect(()=>{
//         fetchStudents().then((students) => {
//             setStudents(students);
//         });
//     },[])
//
//     const navigateToCreateStudent = () => {
//         // 👇️ navigate to /contacts
//         navigate('/createStudent');
//     };
//
//     return (
//         <div>
//             <button onClick={()=> {navigateToCreateStudent()}}>Create Student</button>
//             <StudentTable
//                 students={students}
//                 />
//         </div>
//     )
// }
//
// export default StudentList