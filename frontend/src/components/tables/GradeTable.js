// import React from 'react';
//
// const GradeTable = ({ grades}) => {
//     return (
//         <div className="Student-table">
//             <h2>Grade List</h2>
//             <table className="table table-striped">
//                 <thead>
//                 <tr>
//                     <th scope="col">ID</th>
//                     <th scope="col">Name</th>
//                     <th scope="col">Grade Class</th>
//                     <th scope="col">School Name</th>
//                 </tr>
//                 </thead>
//                 <tbody>
//                 {grades?.map((grade) => (
//                     <tr key={grade.id}>
//                         <td>{grade.id}</td>
//                         <td>{grade.name}</td>
//                         <td>{grade.gradeClass}</td>
//                         <td>{grade.school.name}</td>
//                     </tr>
//                 ))}
//                 </tbody>
//             </table>
//         </div>
//     );
// };
//
// export default GradeTable;



import React from 'react';

const GradeTable = ({ grades }) => {
    return (
        <div className="Grade-table">
            <h2>Grade List</h2>
            <div className="row">
                {grades?.map((grade) => (
                    <div key={grade.id} className="col-md-4 mb-4">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">{grade.name}</h5>
                                <p className="card-text">Grade Class: {grade.gradeClass}</p>
                                <p className="card-text">School Name: {grade.school.name}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default GradeTable;
