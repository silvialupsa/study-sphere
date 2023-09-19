// import React from 'react';
//
// const ProfessorTable = ({ professors }) => {
//     console.log(professors)
//     return (
//         <div className="Professor-table">
//             <h2>Professor List</h2>
//             <table className="table table-striped">
//                 <thead>
//                 <tr>
//                     <th scope="col">ID</th>
//                     <th scope="col">Name</th>
//                     <th scope="col">Birthdate</th>
//                     <th scope="col">Subjects</th>
//                 </tr>
//                 </thead>
//                 <tbody>
//                 {professors?.map((professor) => (
//                     <tr key={professor.id}>
//                         <td>{professor.id}</td>
//                         <td>{professor.person.name}</td>
//                         <td>{professor.person.birthdate}</td>
//                         <td>{professor.subjectList} </td>
//                     </tr>
//                 ))}
//                 </tbody>
//             </table>
//         </div>
//     );
// };
//
//
// export default ProfessorTable;


import React from 'react';

const ProfessorTable = ({ professors }) => {
    return (
        <div className="Professor-table">
            <h2>Professor List</h2>
            <div className="row">
                {professors?.map((professor) => (
                    <div key={professor.id} className="col-md-4 mb-4">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">{professor.person.name}</h5>
                                <p className="card-text">Birthdate: {professor.person.birthdate}</p>
                                <p className="card-text">Subjects: {professor.subjectList?.join(', ')}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProfessorTable;

