// import React from 'react';
//
// const ParentTable = ({parents}) => {
//     return (
//         <div className="Parent-table">
//             <h2>Grade List</h2>
//             <table className="table table-striped">
//                 <thead>
//                 <tr>
//                     <th scope="col">ID</th>
//                     <th scope="col">Name</th>
//                     <th scope="col">Birthdate</th>
//                     <th scope="col">Children</th>
//                 </tr>
//                 </thead>
//                 <tbody>
//                 {parents?.map((parent) => (
//                     <tr key={parent.id}>
//                         <td>{parent.id}</td>
//                         <td>{parent.person.name}</td>
//                         <td>{parent.person.birthdate}</td>
//                         <td>{parent.children?.map((child)=> (
//                             parent.children.indexOf(child) === parent.children.length-1?
//                                 <span>{child.person.name} </span>  :
//                                 <span>{child.person.name}, </span>
//                         ))}</td>
//                     </tr>
//                 ))}
//                 </tbody>
//             </table>
//         </div>
//     );
// };
//
// export default ParentTable;


import React from 'react';

const ParentTable = ({ parents }) => {
    return (
        <div className="Parent-table">
            <h2>Parent List</h2>
            <div className="row">
                {parents?.map((parent) => (
                    <div key={parent.id} className="col-md-4 mb-4">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">{parent.person.name}</h5>
                                <p className="card-text">Birthdate: {parent.person.birthdate}</p>
                                <p className="card-text">Children: {parent.children?.map((child, index) => (
                                    <span key={child.id}>
                    {child.person.name}
                                        {index < parent.children.length - 1 ? ', ' : ''}
                  </span>
                                ))}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ParentTable;
