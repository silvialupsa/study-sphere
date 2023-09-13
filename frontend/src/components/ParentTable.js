import React from 'react';

const ParentTable = ({parents}) => {
    return (
        <div className="Parent-table">
            <h2>Grade List</h2>
            <table className="table table-striped">
                <thead>
                <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Name</th>
                    <th scope="col">Birthdate</th>
                    <th scope="col">Children</th>
                </tr>
                </thead>
                <tbody>
                {parents?.map((parent) => (
                    <tr key={parent.id}>
                        <td>{parent.id}</td>
                        <td>{parent.person.name}</td>
                        <td>{parent.person.birthdate}</td>
                        <td>{parent.children?.map((child)=> (
                            <span>{child.person.name}, </span>
                        ))}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default ParentTable;
