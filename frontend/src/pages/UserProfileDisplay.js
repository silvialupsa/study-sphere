import React from 'react';

const UserProfileDisplay = ({ individual }) => {
    if (!individual || !individual.person) {
        return null; // or display some default content or loading indicator
    }
    // console.log(individual.person)
    return (
        <div className="User-Profile-Display">
            <h2>My Profile</h2>
            <div className="row">
                    <div key={individual.id} className="col-md-4 mb-4">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">{individual.person.firstName}, {individual.person.lastName}</h5>
                                <p className="card-text">Birthdate: {individual.person.birthdate}</p>
                                <p className="card-text">Role: {individual.person.role}</p>
                                {individual.person.role === "ROLE_STUDENT" ?(
                                    <>
                                    <p className="card-text">Role: {individual.gradeClass}</p>
                                    {/*<p className="card-text" >Attendance: {person.attendance}</p>*/}
                                    <p className="card-text">School: {individual.school.name}</p>
                                    </>
                            ): (
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
