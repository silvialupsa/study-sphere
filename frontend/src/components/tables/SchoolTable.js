import React from 'react';

const SchoolTable = ({schools}) => {
    // console.log(schools)
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
                    <th scope="col">Address</th>
                    <th scope="col">Email</th>
                    <th scope="col">Phone Number</th>
                </tr>
                </thead>
                <tbody>
                {schools?.map((school) => (
                    <tr key={school.id}>
                        <td>{school.id}</td>
                        <td>{school.name}</td>
                        <td>{school.schoolInspectorate?.name}</td>
                        <td>{school.schoolPrincipal}</td>
                        <td>{school.address}</td>
                        <td>{school.email}</td>
                        <td>{school.phoneNumber}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default SchoolTable;
