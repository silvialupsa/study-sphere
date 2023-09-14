// const StudentForm =({ onSave,disabled, student, onCancel})=>{
//     const onSubmit = (e) => {
//         e.preventDefault();
//         const formData = new FormData(e.target);
//         const entries = [...formData.entries()];
//
//         const student = entries.reduce((acc, entry) => {
//             const [k, v] = entry;
//             acc[k] = v;
//             return acc;
//         }, {});
//
//         return onSave(student);
//     };
//
//     return(
//         <form className="StudentForm" onSubmit={onSubmit}>
//             {student && (
//                 <input type= "hidden" name="id" defaultValue={student.id}/>
//             )}
//
//             <div className="control">
//                 <label htmlFor="name">Name:</label>
//                 <input
//                     defaultValue={student ? student.name : null}
//                     name="name"
//                     id="name"
//                 />
//             </div>
//
//
//             <div className="control">
//                 <label htmlFor="position">Birthdate:</label>
//                 <input
//                     defaultValue={student ? student.birthdate : null}
//                     name="birthdate"
//                     id="birthdate"
//                 />
//             </div>
//
//
//             <div className="buttons">
//                 <button type="submit" disabled={disabled}>
//                     {student ? "Update Student" : "Create Student"}
//                 </button>
//
//                 <button type="button" onClick={onCancel}>
//                     Cancel
//                 </button>
//             </div>
//         </form>
//     );
// };
//
// export default StudentForm;