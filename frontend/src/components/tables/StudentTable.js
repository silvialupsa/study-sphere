// import React from 'react';
// import {Link} from "react-router-dom";
//
// const StudentTable = ({ students, onDelete }) => {
//     return (
//         <div className="Student-table">
//             <h2>Student List</h2>
//             <table className="table table-striped">
//                 <thead>
//                 <tr>
//                     <th scope="col">ID</th>
//                     <th scope="col">Name</th>
//                     <th scope="col">Birthdate</th>
//                     <th scope="col">Grade Class</th>
//                 </tr>
//                 </thead>
//                 <tbody>
//                 {students?.map((student) => (
//                     <tr key={student.id}>
//                         <td>{student.id}</td>
//                         <td>{student.person.name}</td>
//                         <td>{student.person.birthdate}</td>
//                         <td>{student.gradeClass}</td>
//
//                         <td>
//                             <Link to={`/students/update/${student.id}`}>
//                                 <button type="button">Update</button>
//                             </Link>
//                             <button type="button" onClick={() => onDelete(student.id)}>
//                                 Delete
//                             </button>
//                         </td>
//                     </tr>
//                 ))}
//                 </tbody>
//             </table>
//         </div>
//     );
// };
//
// export default StudentTable;



import React from 'react';
import { Link } from "react-router-dom";

const StudentTable = ({ students, onDelete }) => {
    return (
        <div className="Student-table">
            <h2>Student List</h2>
            <div className="row">
                {students?.map((student) => (
                    <div key={student.id} className="col-md-4 mb-4">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">{student.person.firstName}</h5>
                                <h5 className="card-title">{student.person.lastName}</h5>
                                <p className="card-text">Birthdate: {student.person.birthdate}</p>
                                <p className="card-text">Grade Class: {student.gradeClass}</p>
                                <div className="d-flex justify-content-between">
                                    <Link to={`/students/update/${student.id}`}>
                                        <button type="button" className="btn btn-primary">Update</button>
                                    </Link>
                                    <button
                                        type="button"
                                        className="btn btn-danger"
                                        onClick={() => onDelete(student.id)}
                                    >
                                        Delete
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default StudentTable;
