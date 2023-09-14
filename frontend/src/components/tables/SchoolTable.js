import React from 'react';

const SchoolTable = ({schools}) => {
    return (
        <div className="School-table">
            <h2>School List</h2>
            <table className="table table-striped">
                <thead>
                <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Name</th>
                    <th scope="col">Inspectorate</th>
                    <th scope="col">School Principal</th>
                </tr>
                </thead>
                <tbody>
                {schools?.map((school) => (
                    <tr key={school.id}>
                        <td>{school.id}</td>
                        <td>{school.name}</td>
                        <td>{school.schoolInspectorate?.name}</td>
                        <td>{school.schoolPrincipal}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default SchoolTable;
