import React from 'react';

const SchoolTable = ({ schools }) => {
    return (
        <div className="School-table">
            <h2>School List</h2>
            <div className="row">
                {schools?.map((school) => (
                    <div key={school.id} className="col-md-4 mb-4">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">{school.name}</h5>
                                <p className="card-text">Inspectorate: {school.schoolInspectorate?.name}</p>
                                <p className="card-text">School Principal: {school.schoolPrincipal}</p>
                                <p className="card-text">Address: {school.address}</p>
                                <p className="card-text">Email: {school.email}</p>
                                <p className="card-text">Phone Number: {school.phoneNumber}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SchoolTable;
