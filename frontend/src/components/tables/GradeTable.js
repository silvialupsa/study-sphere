import React from 'react';

const GradeTable = ({ grades}) => {
    return (
        <div className="Student-table">
            <h2>Grade List</h2>
            <table className="table table-striped">
                <thead>
                <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Name</th>
                    <th scope="col">Grade Class</th>
                    <th scope="col">School Name</th>
                </tr>
                </thead>
                <tbody>
                {grades?.map((grade) => (
                    <tr key={grade.id}>
                        <td>{grade.id}</td>
                        <td>{grade.name}</td>
                        <td>{grade.gradeClass}</td>
                        <td>{grade.school.name}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default GradeTable;
