import {useEffect, useState} from "react";

const StudentForm = ({
                         onSave,
                         disabled,
                         student,
                         onCancel,
                         schools
                     }) => {

    const [gradesBySchoolId, setGradesBySchoolId] = useState([]);
    const [schoolId, setSchoolId] = useState(student?.school?.id);
    const [showGrades, setShowGrades] = useState(false);

    const fetchGradesBySchoolId = () => {
        return fetch(`/grades/school/${schoolId}`).then((res) => res.json())
    };


    useEffect(() => {
        if (schoolId) {
            fetchGradesBySchoolId().then((grades) => {
                setGradesBySchoolId(grades);
                setShowGrades(true);
                console.log(grades)
            });
        } else {
            // Reset grades and show message if schoolId is empty or undefined
            setGradesBySchoolId([]);
            setShowGrades(false);
        }
    }, [schoolId]);

    console.log(gradesBySchoolId)
    const onSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);

        const studentData = {
            id: formData.get("id"),
            person: {
                // id: formData.get("person.id"),
                firstName: formData.get("person.firstName"),
                lastName: formData.get("person.lastName"),
                birthdate: formData.get("person.birthdate"),
            },
            gradeClass: formData.get("gradeClass") ,
            school: {
                id: parseInt(formData.get("school")),
            },
        };

        onSave(studentData);
    };

    return (
        <form className="StudentForm" onSubmit={onSubmit}>
            {student && <input type="hidden" name="id" defaultValue={student.id} />}
            <div className="control">
                <label htmlFor="person.firstName">First Name:</label>
                <input
                    defaultValue={student ? student.person.firstName : ""}
                    name="person.firstName"
                    id="person.firstName"
                />
            </div>

            <div className="control">
                <label htmlFor="person.lastName">Last Name:</label>
                <input
                    defaultValue={student ? student.person.lastName : ""}
                    name="person.lastName"
                    id="person.lastName"
                />
            </div>

            <div className="control">
                <label htmlFor="person.birthdate">Birthdate:</label>
                <input
                    defaultValue={student ? student.person.birthdate : ""}
                    type="date"
                    name="person.birthdate"
                    id="person.birthdate"
                />
            </div>



            <div className="control">
                <label htmlFor="school">School:</label>
                <select
                    name="school"
                    id="school"
                    defaultValue={student ? student.school.name : ""}
                    onChange={(e) => setSchoolId(e.target.value)}
                >
                    <option value="" disabled>
                        {student && student.school ? student.school.name : "Select a school"}
                    </option>
                    {schools?.map((sc) => (
                        <option
                            key={sc.id}
                            value={sc.id}
                        >
                            {sc.name}
                        </option>
                    ))}
                </select>
            </div>


            {showGrades && (
                <div className="control">
                    <label htmlFor="gradeClass">New Grade:</label>
                    <select name="gradeClass"
                            id="gradeClass"
                            defaultValue= {student? student.gradeClass : "" }>
                        <option value="" disabled selected>
                            Select a new grade
                        </option>
                        {gradesBySchoolId?.map((gr) => {
                            return (
                                <option
                                    selected={student?.gradeClass === gr.gradeClass}
                                    key={gr.gradeClass}
                                    value={gr.gradeClass}
                                >
                                    {gr.gradeClass}
                                </option>
                            );
                        })}
                    </select>
                </div>
            )}

            <div className="control">
                <label htmlFor="gradeClass">Existing grade:</label>
                <input
                    type="text"
                    name="gradeClass"
                    id="gradeClass"
                    value={student ? student.gradeClass : ""}
                    readOnly
                />
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

