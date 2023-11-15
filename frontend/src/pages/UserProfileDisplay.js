import React from 'react';
import Calendar from "react-calendar";

const UserProfileDisplay = ({individual, attendance}) => {
    if (!individual || !individual.person) {
        return null; // or display some default content or loading indicator
    }


    const getTileColor = (attendanceStatus) => {
        // console.log(attendanceStatus)
        switch (attendanceStatus) {
            case 'PRESENT':
                return 'green';
            case 'ABSENT':
                return 'red';
            case 'PENDING':
                return 'grey';
            default:
                return 'green';
        }
    };

   const getAttendanceStatus = (attendanceArray, formattedDate) => {
        const attendanceItem = attendanceArray.find((item) => item.date === formattedDate);
        return attendanceItem ? attendanceItem.attendanceStatus : 'PENDING';
    };


    return (
        <div className="User-Profile-Display">
            <h2>My Profile</h2>
            <div className="row">
                <div key={individual.id} className="col-md-4 mb-4">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">
                                {individual.person.firstName}, {individual.person.lastName}
                            </h5>
                            <p className="card-text">Birthdate: {individual.person.birthdate}</p>
                            <p className="card-text">Role: {individual.person.role}</p>
                            {individual.person.role === "ROLE_STUDENT" ? (
                                <>
                                    <p className="card-text">Role: {individual.gradeClass}</p>
                                    <p className="card-text">School: {individual.school.name}</p>
                                    <div>
                                        <h3>Attendance Calendar</h3>
                                        <Calendar
                                            tileContent={({date}) => {
                                                const formattedDate = date.toISOString().split('T')[0];
                                                const attendanceArray = Object.values(attendance);
                                                const attendanceStatus = getAttendanceStatus(attendanceArray, formattedDate);
                                                return (
                                                    <div
                                                        style={{
                                                            backgroundColor: getTileColor(attendanceStatus),
                                                            fontSize: 0,
                                                        }}
                                                    >
                                                        {attendanceStatus}
                                                    </div>
                                                );
                                            }}
                                        />
                                    </div>
                                </>
                            ) : (
                                <p className="card-text">Subjects: {individual.subjectList}</p>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserProfileDisplay;
