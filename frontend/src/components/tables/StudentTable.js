import React from 'react';
import {Link} from "react-router-dom";

const StudentTable = ({ students, onDelete }) => {
    return (
        <div className="Student-table">
            <h2>Student List</h2>
            <table className="table table-striped">
                <thead>
                <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Name</th>
                    <th scope="col">Birthdate</th>
                    <th scope="col">Grade Class</th>
                </tr>
                </thead>
                <tbody>
                {students?.map((student) => (
                    <tr key={student.id}>
                        <td>{student.id}</td>
                        <td>{student.person.name}</td>
                        <td>{student.person.birthdate}</td>
                        <td>{student.gradeClass}</td>

                        <td>
                            <Link to={`/update/${student.id}`}>
                                <button type="button">Update</button>
                            </Link>
                            <button type="button" onClick={() => onDelete(student.id)}>
                                Delete
                            </button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default StudentTable;
