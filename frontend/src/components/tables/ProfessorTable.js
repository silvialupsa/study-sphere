import React from 'react';

const ProfessorTable = ({ professors }) => {
    console.log(professors)
    return (
        <div className="Professor-table">
            <h2>Professor List</h2>
            <table className="table table-striped">
                <thead>
                <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Name</th>
                    <th scope="col">Birthdate</th>
                    <th scope="col">Subjects</th>
                </tr>
                </thead>
                <tbody>
                {professors?.map((professor) => (
                    <tr key={professor.id}>
                        <td>{professor.id}</td>
                        <td>{professor.person.name}</td>
                        <td>{professor.person.birthdate}</td>
                        <td>{professor.subjectList} </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};


export default ProfessorTable;
