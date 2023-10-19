import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';

const fetchAttendanceByStudentIdAndDate = (studentId, date) => {
    return fetch(`/attendance/student/${studentId}/date/${date}`)
        .then((res) => res.json());
};

const updateAttendance = (studentId, date, attendance) => {
    return fetch(`/attendance/student/${studentId}/date/${date}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(attendance),
    }).then((res) => res.json());
};

const StudentTable = ({students, onDelete, date}) => {

    const [attendanceStatus, setAttendanceStatus] = useState({});
    const [attendance, setAttendance] = useState({});

    useEffect(() => {
        // Fetch and initialize the attendance status for each student
        const initialStatus = {};

        students.forEach((student) => {
            fetchAttendanceByStudentIdAndDate(student.id, date)
                .then((attendance) => {
                    if (attendance) {
                        initialStatus[student.id] = attendance.present;
                    } else {
                        initialStatus[student.id] = false; // Default to false if no attendance data
                    }
                })
                .catch((error) => {
                    console.error('Error fetching attendance:', error);
                    initialStatus[student.id] = false;
                    // Handle the error as needed
                });
        });
        setAttendanceStatus(initialStatus);
    }, [students, date]);

    const handleUpdateAttendance = (studentId, date) => {
        updateAttendance(studentId, date, attendance).then(() => {
            console.log(studentId)
            console.log(attendance)
            console.log("Status "+ attendanceStatus.id)
            toggleAttendance(students);
        })
    }
    const toggleAttendance = (students) => {
        // Toggle the attendance status for the student
        students.forEach((student) => {
            setAttendanceStatus({
                ...attendanceStatus,
                [student]: !attendanceStatus[student.id],
            });
        })

    };


    return (
        <div className="Student-table">
            <h2>Student List</h2>
            <h2>Current date: {date}</h2>
            <button className='btn-group' onClick={() => toggleAttendance(students)}>Update Attendance</button>

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
                                            onClick={() => {
                                                handleUpdateAttendance(student.id, date);
                                                setAttendanceStatus(true);
                                            }}
                                        >
                                            Present
                                        </button>
                                        <button
                                            className={`btn ${
                                                attendanceStatus[student.id] === false ? 'btn-danger' : 'btn-secondary'
                                            }`}
                                            onClick={() => {
                                                handleUpdateAttendance(student.id, date)
                                                setAttendanceStatus(false)
                                            }}
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
