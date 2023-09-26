import React, {useEffect, useState} from "react";
import {logDOM} from "@testing-library/react";

const StudentForm = ({ onSave, disabled, student, onCancel, schools, grades }) => {

    console.log(student);
    const [formData, setFormData] = useState({
        person: {
            firstName: student?.person?.firstName || "",
            lastName: student?.person?.lastName || "",
            birthdate: student?.person?.birthdate || "",
        },
        gradeClass: student?.gradeClass || "",
        school: {
            id: student?.school?.id || ""
        }
    });

    console.log(formData)

    const [gradesBySchoolId, setGradesBySchoolId] = useState([]);
    const [schoolId, setSchoolId] = useState(1);


    const fetchGradesBySchoolId = () => {
        return fetch(`/grades/school/${schoolId}`).then((res) => res.json())
    };

    useEffect(() => {
        fetchGradesBySchoolId().then((gradesBySchoolId) => {
            setGradesBySchoolId(gradesBySchoolId);
        });
    }, [formData.school.id]);

    const onSubmit = (e) => {
        e.preventDefault();

        const studentData = {
            person: {
                firstName: formData?.person?.firstName,
                lastName: formData?.person.lastName,
                birthdate: formData?.person.birthdate,
            },
            gradeClass: formData?.gradeClass,
            school: {
                id: formData?.school?.id,
            },
        };

        onSave(studentData);
    };

    return (
        <form className="StudentForm" onSubmit={onSubmit}>
            {student && <input type="hidden" name="id" defaultValue={student.id} />}

            <div className="person">
                <label htmlFor="firstName">First name</label>
                <input
                    type="text"
                    id="name"
                    value={formData?.person?.firstName}
                    onChange={(e) => {
                        setFormData({
                            ...formData,
                            person: {...formData.person, firstName: e.target.value},
                        })
                    }
                    }
                />
            </div>
            <div>
                <label htmlFor="lastName">Last name</label>
                <input
                    type="text"
                    id="name"
                    value={formData?.person?.lastName}
                    onChange={(e) =>
                        setFormData({
                            ...formData,
                            person: { ...formData.person, lastName: e.target.value },
                        })
                    }
                />
            </div>
            <div className="birthdate">
                <label htmlFor="birthdate">Birthdate</label>
                <input
                    type="date"
                    id="birthdate"
                    value={formData?.person?.birthdate}
                    onChange={(e) =>
                        setFormData({
                            ...formData,
                            person: { ...formData.person, birthdate: e.target.value },
                        })
                    }
                />
            </div>

            <div className="control">
                <label htmlFor="school">School:</label>
                <select
                    id="school"
                    value={formData?.school?.id}
                    onChange={(e) => {
                        setFormData({
                            ...formData,
                            school: {...formData.school, id: e.target.value},
                        })
                        setSchoolId(e.target.value);
                    }
                    }
                >
                    <option value="" disabled>
                        Select a school
                    </option>
                    {schools?.map((p) => (
                        <option
                            // selected={student?.school.id === p.id}
                            key={p.id}
                            value={p.id}
                        >
                            {p.name}
                        </option>
                    ))}
                </select>
            </div>
            <div className="control">
                <label htmlFor="gradeClass">Grade:</label>
                <select
                    id="grade"
                    value={formData?.gradeClass}
                    onChange={(e) =>
                        setFormData({
                            ...formData,
                            gradeClass: e.target.value,
                        })
                    }
                >
                    <option value="" disabled>
                        Select a grade
                    </option>
                    {gradesBySchoolId?.map((g) => (
                        <option
                            // selected={student?.gradeClass === g.gradeClass}
                            key={g.id}
                            value={g.gradeClass}
                        >
                            {g.gradeClass}
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