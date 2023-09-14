import React from 'react';

const InspectoratesTable = ({ inspectorates }) => {
    return (
        <div className="Inspectorates-table">
            <h2>Inspectorates List</h2>
            <table className="table table-striped">
                <thead>
                <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Name</th>
                    <th scope="col">Schools</th>
                </tr>
                </thead>
                <tbody>
                {inspectorates?.map((inspectorates) => (
                    <tr key={inspectorates.id}>
                        <td>{inspectorates.id}</td>
                        <td>{inspectorates.name}</td>
                        <td>{inspectorates.schoolList?.map((school)=> (
                            inspectorates.schoolList.indexOf(school) === inspectorates.schoolList.length-1?
                            <span>{school.name} </span>  :
                                <span>{school.name}, </span>
                        ))}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default InspectoratesTable;
