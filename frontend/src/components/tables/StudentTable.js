import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';

const fetchAttendanceByStudentIdAndDate = (studentId, date) => {
    return fetch(`/attendance/student/${studentId}/date/${date}`)
        .then((res) => {
            if (res.ok) {
                return res.json();
            } else {
                return fetch(`/attendance/add`, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        date: date,
                        attendanceStatus: "PENDING",
                        student: {
                            id: studentId,
                        },
                    }),
                }).then((res) => res.json());

            }
        });
};

const updateAttendance = async (studentId, date, attendanceStatus) => {
    const attendance = {
        date: date,
        attendanceStatus: attendanceStatus,
        student: {
            id: studentId,
        },
    };
    console.log('Request Body:', JSON.stringify(attendance));

    const res = await fetch(`/attendance/update/student/${studentId}/date/${date}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(attendance),
    });

    return res.json();
};


const StudentTable = ({ students, onDelete, date }) => {
    const [attendanceStatus, setAttendanceStatus] = useState({});


    useEffect(() => {
        const initialStatus = {};

        const fetchAttendance = async () => {
            const promises = students.map(async (student) => {
                try {
                    const attendance = await fetchAttendanceByStudentIdAndDate(student.id, date);
                    if (attendance) {
                        initialStatus[student.id] = attendance.attendanceStatus;
                    } else {
                        initialStatus[student.id] = "PENDING";
                        const defaultAttendance = {
                            date: date,
                            attendanceStatus: "PENDING",
                            student: {
                                id: student.id,
                            },
                        };
                        await updateAttendance(student.id, date, defaultAttendance);
                    }
                } catch (error) {
                    console.error('Error fetching attendance:', error);
                }
            });

            await Promise.all(promises);
            setAttendanceStatus(initialStatus);
        };

        fetchAttendance();
    }, [students, date]);

    const handleUpdateAttendance = (studentId, attendanceStatus) => {
        updateAttendance(studentId, date, attendanceStatus).then(() => {
            setAttendanceStatus((prevStatus) => ({
                ...prevStatus,
                [studentId]: attendanceStatus,
            }));
        });
        console.log(attendanceStatus)
    };




    return (
        <div className="Student-table">
            <h2>Student List</h2>
            <h2>Current date: {date}</h2>
            {/*<button className='btn-group' onClick={() =>handleUpdateAttendanceClick()}>Update Attendance</button>*/}

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
                                                attendanceStatus[student.id] === "PRESENT" ? 'btn-success' : 'btn-secondary'
                                            }`}
                                            onClick={() => {
                                                // setAttendanceStatus(true);
                                                handleUpdateAttendance(student.id, "PRESENT");
                                            }}
                                        >
                                            Present
                                        </button>
                                        <button
                                            className={`btn ${
                                                attendanceStatus[student.id] === "ABSENT" ? 'btn-danger' : 'btn-secondary'
                                            }`}
                                            onClick={() => {
                                                // setAttendanceStatus(false)
                                                handleUpdateAttendance(student.id, "ABSENT")
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
