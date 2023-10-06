import React, {useState} from 'react';
import {Link} from 'react-router-dom';

const StudentTable = ({students, onDelete}) => {
    const currentDate = new Date().toDateString(); // Get the current date in a readable format
    const [attendanceStatus, setAttendanceStatus] = useState({});

    const toggleAttendance = (studentId) => {
        setAttendanceStatus((prevStatus) => ({
            ...prevStatus,
            [studentId]: !prevStatus[studentId],
        }));
    };

    return (
        <div className="Student-table">
            <h2>Student List</h2>
            <h2>Current date: {currentDate}</h2>
            <div className="row">
                {students?.map((student) => (
                    <div key={student.id} className="col-md-4 mb-4">
                        <div className="card">
                            <div className="card-body">
                                <div className="d-flex justify-content-between">
                                    <div><h5 className="card-title">{student.person.firstName}</h5>
                                        <h5 className="card-title">{student.person.lastName}</h5></div>
                                    <div className="attendance-buttons">
                                        <button
                                            className={`btn ${
                                                attendanceStatus[student.id] ? 'btn-success' : 'btn-secondary'
                                            }`}
                                            onClick={() => toggleAttendance(student.id)}
                                        >
                                            Present
                                        </button>
                                        <button
                                            className={`btn ${
                                                !attendanceStatus[student.id] ? 'btn-danger' : 'btn-secondary'
                                            }`}
                                            onClick={() => toggleAttendance(student.id)}
                                        >
                                            Absent
                                        </button>
                                    </div>
                                </div>
                                <p className="card-text">Birthdate: {student.person.birthdate}</p>
                                <p className="card-text">Email: {student.person.email}</p>
                                <p className="card-text">School: {student.school.name}</p>
                                <p className="card-text">Grade Class: {student.gradeClass}</p>
                                <div className="d-flex justify-content-between">
                                    <Link to={`/students/update/${student.id}`}>
                                        <button type="button" className="btn btn-primary">
                                            Update
                                        </button>
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
