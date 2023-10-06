import {useEffect, useState} from "react";

const StudentForm = ({
                         onSave,
                         disabled,
                         student,
                         onCancel,
                         schools,
                         roles,
                         people
                     }) => {
    const [gradesBySchoolId, setGradesBySchoolId] = useState([]);
    const [schoolId, setSchoolId] = useState(student?.school?.id);
    const [showGrades, setShowGrades] = useState(false);
    const [isEmailUnique, setIsEmailUnique] = useState(true);
    const [errorMessage, setErrorMessage] = useState("");
    const [role, setRole] = useState("");


    const fetchGradesBySchoolId = () => {
        return fetch(`/grades/school/${schoolId}`).then((res) => res.json())
    };


    const checkEmailUniqueness = (email) => {
        const isUnique = !people.some((person) => person.email === email);
        setIsEmailUnique(isUnique);
        if (!isUnique) {
            setErrorMessage("Email already exists. Please choose a different email.");
        } else {
            setErrorMessage("");
        }
    };

    useEffect(() => {
        if (schoolId) {
            fetchGradesBySchoolId().then((grades) => {
                setGradesBySchoolId(grades);
                setShowGrades(true);
            });
        } else {
            setGradesBySchoolId([]);
            setShowGrades(false);
        }
    }, [schoolId]);

    const onSubmit = (e) => {
        e.preventDefault();

        if (!isEmailUnique) {
            return;
        }

        const formData = new FormData(e.target);

        const studentData = {
            id: student ? student.id : "",
            person: {
                firstName: formData.get("person.firstName"),
                lastName: formData.get("person.lastName"),
                birthdate: formData.get("person.birthdate"),
                email: formData.get("person.email"),
                password: formData.get("person.password"),
                role: formData.get("person.role")
            },
            gradeClass: formData.get("gradeClass"),
            school: {
                id: parseInt(formData.get("school")),
            },
        };

        onSave(studentData);
    };

    return (
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">
                    {student ? "Edit Student" : "Create Student"}
                </h5>
                <form onSubmit={onSubmit}>
                    {student && <input type="hidden" name="id" defaultValue={student.id}/>}
                    <div className="mb-3">
                        <label htmlFor="person.firstName" className="form-label">First Name:</label>
                        <input
                            defaultValue={student ? student.person?.firstName : ""}
                            name="person.firstName"
                            id="person.firstName"
                            className="form-control"
                        />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="person.lastName" className="form-label">Last Name:</label>
                        <input
                            defaultValue={student ? student.person?.lastName : ""}
                            name="person.lastName"
                            id="person.lastName"
                            className="form-control"
                        />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="person.birthdate" className="form-label">Birthdate:</label>
                        <input
                            defaultValue={student ? student.person?.birthdate : ""}
                            type="date"
                            name="person.birthdate"
                            id="person.birthdate"
                            className="form-control"
                        />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="person.email" className="form-label">Email:</label>
                        <input
                            defaultValue={student ? student.person?.email : ""}
                            name="person.email"
                            id="person.email"
                            className="form-control"
                            autoComplete="username"
                            onChange={(e) => checkEmailUniqueness(e.target.value)}
                        />
                        {!isEmailUnique && (
                            <div className="alert alert-danger">{errorMessage}</div>
                        )}
                    </div>

                    <div className="mb-3">
                        <label htmlFor="person.password" className="form-label">Password:</label>
                        <input
                            defaultValue={student ? student.person?.password : ""}
                            name="person.password"
                            id="person.password"
                            className="form-control"
                            type="password"
                            autoComplete="current-password"
                        />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="person.role" className="form-label">
                            Change Role:
                        </label>
                        <select
                            name="person.role"
                            id="person.role"
                            value={role}
                            onChange={(e) => setRole(e.target.value)}
                            className="form-select"
                        >
                            <option value="" disabled>
                                {student && student.person?.role ? student.person.role : "Add a role"}
                            </option>
                            {roles?.map((rol) => (
                                <option key={rol} value={rol}>
                                    {rol}
                                </option>
                            ))}
                        </select>
                    </div>

                    {/*<div className="mb-3">*/}
                    {/*    <label htmlFor="person.role" className="form-label">Existing role:</label>*/}
                    {/*    <input*/}
                    {/*        type="text"*/}
                    {/*        name="person.role"*/}
                    {/*        id="person.role"*/}
                    {/*        value={student ? student.person?.role : ""}*/}
                    {/*        readOnly*/}
                    {/*        className="form-control"*/}
                    {/*    />*/}
                    {/*</div>*/}

                    <div className="mb-3">
                        <label htmlFor="school" className="form-label">School:</label>
                        <select
                            name="school"
                            id="school"
                            defaultValue={student ? student.school?.name : ""}
                            onChange={(e) => setSchoolId(e.target.value)}
                            className="form-select"
                        >
                            <option value="" disabled>
                                {student && student.school ? student.school?.name : "Select a school"}
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
                        <div className="mb-3">
                            <label htmlFor="gradeClass" className="form-label">New Grade:</label>
                            <select name="gradeClass"
                                    id="gradeClass"
                                    defaultValue={student ? student.gradeClass : ""}
                                    className="form-select"
                            >
                                <option value="" disabled>
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

                    <div className="mb-3">
                        <label htmlFor="gradeClass" className="form-label">Existing grade:</label>
                        <input
                            type="text"
                            name="gradeClass"
                            id="gradeClass"
                            value={student ? student.gradeClass : ""}
                            readOnly
                            className="form-control"
                        />
                    </div>

                    <div className="mb-3">
                        <div className="d-flex justify-content-between">
                            <button type="submit" disabled={disabled} className="btn btn-primary">
                                {student ? "Update Student" : "Create Student"}
                            </button>
                            <button type="button" onClick={onCancel} className="btn btn-secondary">
                                Cancel
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default StudentForm;