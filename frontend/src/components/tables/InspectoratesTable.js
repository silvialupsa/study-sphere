import React from 'react';
import { useNavigate } from "react-router-dom";

const InspectoratesTable = ({ inspectorates }) => {
    const navigate = useNavigate();

    const checkSchools = (id) => {
        navigate(`/checkSchools/${id}`);
    }

    return (
        <div className="Inspectorates-table">
            <h2>Inspectorates List</h2>
            <div className="row">
                {inspectorates?.map((inspectorate) => (
                    <div key={inspectorate.id} className="col-md-4 mb-4">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">{inspectorate.name}</h5>
                                <p className="card-text">Email: {inspectorate.email}</p>
                                <p className="card-text">Phone Number: {inspectorate.phoneNumber}</p>
                                <p className="card-text">Address: {inspectorate.address}</p>
                                <p className="card-text">County: {inspectorate.county}</p>
                                <button onClick={() => checkSchools(inspectorate.id)}>Check Schools</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default InspectoratesTable;
