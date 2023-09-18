import React, {useState} from 'react';
import { useNavigate} from "react-router-dom";

const InspectoratesTable = ({ inspectorates }) => {
const navigate = useNavigate();
    const checkSchools = (id) =>{
        navigate(`/checkSchools/${id}`)
    }

    return (
        <div className="Inspectorates-table">
            <h2>Inspectorates List</h2>
            <table className="table table-striped">
                <thead>
                <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Phone Number</th>
                    <th scope="col">Address</th>
                    <th scope="col">County</th>
                    <th scope="col">Schools</th>
                </tr>
                </thead>
                <tbody>
                {inspectorates?.map((inspectorate) => (
                    <tr key={inspectorate.id}>
                        <td>{inspectorate.id}</td>
                        <td>{inspectorate.name}</td>
                        <td>{inspectorate.email}</td>
                        <td>{inspectorate.phoneNumber}</td>
                        <td>{inspectorate.address}</td>
                        <td>{inspectorate.county}</td>
                        <td>
                        <button onClick={() =>checkSchools(inspectorate.id)}>Check Schools</button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default InspectoratesTable;
{/*<td>{inspectorates.schoolList?.map((school)=> (*/}
{/*    inspectorates.schoolList.indexOf(school) === inspectorates.schoolList.length-1?*/}
{/*    <span>{school.name} </span>  :*/}
{/*        <span>{school.name}, </span>*/}
{/*))}</td>*/}