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
                                <p className="card-text">Email: {student.person.email}</p>
                                <p className="card-text">School: {student.school.name}</p>
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