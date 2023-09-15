import React, { useState } from "react";

const StudentForm =({ onSave,disabled, student, onCancel, schools, people, grades})=>{
    const [formData, setFormData] = useState({
        personId: "",
        gradeClass: "",
        schoolId: "",
    });

    const onSubmit = (e) => {
        e.preventDefault();

        // Create the JSON object from the form data
        const studentData = {
            person: {
                id: formData.personId,
            },
            dailyGoals: [],
            gradeClass: formData.gradeClass,
            school: {
                id: formData.schoolId,
            },
        };
        // Call the onSave function with the student data
        onSave(studentData);
    };

    // const onSubmit = (e) => {
    //     e.preventDefault();
    //     const formData = new FormData(e.target);
    //     const entries = [...formData.entries()];
    //
    //     const student = entries.reduce((acc, entry) => {
    //         const [k, v] = entry;
    //         acc[k] = v;
    //         return acc;
    //     }, {});
    //
    //     return onSave(student);
    // };

    return(
        <form className="StudentForm" onSubmit={onSubmit}>
            {student && (
                <input type= "hidden" name="id" defaultValue={student.id}/>
            )}

            <div className="control">
                <label htmlFor="person">Person:</label>
                <select
                    name="person"
                    id="person"
                    value={formData.personId}
                    onChange={(e) =>
                        setFormData({ ...formData, personId: e.target.value })
                    }
                >
                    <option value="" disabled>
                        Select a person
                    </option>
                    {people?.map((p)=> (
                        <option
                            selected={student?.person === p.id}
                            key={p.id}
                            value={p.id}>{p.name}</option>
                    ))}
                </select>
            </div>

            <div className="control">
                <label htmlFor="dailyDoals">Daily goals</label>
                <input/>
            </div>

            <div className="control">
                <label htmlFor="grade">Grade:</label>
                <input
                    name="grade"
                    id="grade"
                    value={formData.gradeClass}
                    onChange={(e) =>
                        setFormData({ ...formData, gradeClass: e.target.value })
                    }
                >
                </input>
            </div>

            <div className="control">
                <label htmlFor="school">School:</label>
                <select
                    name="school"
                    id="school"
                    value={formData.schoolId}
                    onChange={(e) =>
                        setFormData({ ...formData, schoolId: e.target.value })
                    }
                >
                    <option value="" disabled>
                        Select a school
                    </option>
                    {schools?.map((p)=> (
                        <option
                            selected={student?.school === p.id}
                            key={p.id}
                            value={p.id}>{p.name}</option>
                    ))}
                </select>
            </div>


            <div className="buttons">
                <button type="submit" disabled={disabled}>
                    {student ? "Update Student" : "Create Student"}
                </button>

                <button type="button" onClick={onCancel}>
                    Cancel
                </button>
            </div>
        </form>
    );
};

export default StudentForm;