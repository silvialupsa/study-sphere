import React, { useState } from "react";

const StudentForm = ({ onSave, disabled, student, onCancel, schools, grades }) => {
    const [formData, setFormData] = useState({
        person: {
            name: "",
            birthdate: "",
        },
        gradeClass: "",
        school: {
            id: "",
        },
    });

    const onSubmit = (e) => {
        e.preventDefault();

        // Create the JSON object from the form data
        const studentData = {
            person: {
                name: formData.person.name,
                birthdate: formData.person.birthdate,
            },
            gradeClass: formData.gradeClass,
            calendar: null,
            school: {
                id: formData.school.id,
            },
        };

        // Call the onSave function with the student data
        onSave(studentData);
    };

    return (
        <form className="StudentForm" onSubmit={onSubmit}>
            {student && <input type="hidden" name="id" defaultValue={student.id} />}

            <div className="person">
                <label htmlFor="name">Name</label>
                <input
                    type="text"
                    id="name"
                    value={formData.person.name}
                    onChange={(e) =>
                        setFormData({
                            ...formData,
                            person: { ...formData.person, name: e.target.value },
                        })
                    }
                />
            </div>

            <div className="birthdate">
                <label htmlFor="birthdate">Birthdate</label>
                <input
                    type="date"
                    id="birthdate"
                    value={formData.person.birthdate}
                    onChange={(e) =>
                        setFormData({
                            ...formData,
                            person: { ...formData.person, birthdate: e.target.value },
                        })
                    }
                />
            </div>

            <div className="control">
                <label htmlFor="grade">Grade:</label>
                <input
                    type="text"
                    id="grade"
                    value={formData.gradeClass}
                    onChange={(e) => setFormData({ ...formData, gradeClass: e.target.value })}
                />
            </div>

            <div className="control">
                <label htmlFor="school">School:</label>
                <select
                    id="school"
                    value={formData.school.id}
                    onChange={(e) =>
                        setFormData({
                            ...formData,
                            school: { ...formData.school, id: e.target.value },
                        })
                    }
                >
                    <option value="" disabled>
                        Select a school
                    </option>
                    {schools?.map((p) => (
                        <option
                            selected={student?.school.id === p.id}
                            key={p.id}
                            value={p.id}
                        >
                            {p.name}
                        </option>
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
