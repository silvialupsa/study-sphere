import React from 'react';

const StudentTable = ({ students }) => {
    return (
        <div className="Student-table">
            <h2>Student List</h2>
            <table className="table table-striped">
                <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Birthdate</th>
                    <th>Grade Class</th>
                </tr>
                </thead>
                <tbody>
                {students?.map((student) => (
                    <tr key={student.id}>
                        <td>{student.id}</td>
                        <td>{student.person.name}</td>
                        <td>{student.person.birthdate}</td>
                        <td>{student.gradeClass}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default StudentTable;
