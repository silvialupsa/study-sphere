import {useEffect, useState} from "react";

const ProfessorForm = ({
                           onSave,
                           disabled,
                           onCancel,
                           subjects,
                           professor,
                           roles,
                           people
                       }) => {

    const [selectedSubjects, setSelectedSubjects] = useState([]);
    const [newSubject, setNewSubject] = useState("");
    const [isEmailUnique, setIsEmailUnique] = useState(true);
    const [errorMessage, setErrorMessage] = useState("");


    const checkEmailUniqueness = (email) => {
        const isUnique = !people.some((person) => person.email === email);
        setIsEmailUnique(isUnique);
        if (!isUnique) {
            setErrorMessage("Email already exists. Please choose a different email.");
        } else {
            setErrorMessage("");
        }
    };
    const onSubmit = (e) => {
        e.preventDefault();

        if(!isEmailUnique){
            return;
        }
        const formData = new FormData(e.target);

        const professorData = {
            id: formData.get("id"),
            person: {
                id: professor ? professor.person?.id : "",
                firstName: formData.get("person.firstName"),
                lastName: formData.get("person.lastName"),
                birthdate: formData.get("person.birthdate"),
                email: formData.get("person.email"),
                password: formData.get("person.password"),
                role: formData.get("person.role")
            },
            subjectList: professor ? [...professor.subjectList, ...selectedSubjects] : selectedSubjects,
        };

        onSave(professorData);
    };

    const handleAddSubject = () => {
        if (newSubject) {
            setSelectedSubjects([...selectedSubjects, newSubject]);
            setNewSubject(""); // Clear the input field
        }
    };

    return (
        <form onSubmit={onSubmit}>
            {professor && <input type="hidden" name="id" defaultValue={professor.id}/>}
            <div className="mb-3">
                <label htmlFor="person.firstName" className="form-label">First Name:</label>
                <input
                    defaultValue={professor ? professor.person?.firstName : ""}
                    name="person.firstName"
                    id="person.firstName"
                    className="form-control"
                />
            </div>

            <div className="mb-3">
                <label htmlFor="person.lastName" className="form-label">Last Name:</label>
                <input
                    defaultValue={professor ? professor.person?.lastName : ""}
                    name="person.lastName"
                    id="person.lastName"
                    className="form-control"
                />
            </div>

            <div className="mb-3">
                <label htmlFor="person.birthdate" className="form-label">Birthdate:</label>
                <input
                    defaultValue={professor ? professor.person?.birthdate : ""}
                    type="date"
                    name="person.birthdate"
                    id="person.birthdate"
                    className="form-control"
                />
            </div>

            <div className="mb-3">
                <label htmlFor="person.email" className="form-label">Email:</label>
                <input
                    defaultValue={professor ? professor.person?.email : ""}
                    name="person.email"
                    id="person.email"
                    className="form-control"
                    onChange={(e) => checkEmailUniqueness(e.target.value)}
                />
                {!isEmailUnique && (
                    <div className="alert alert-danger">{errorMessage}</div>
                )}
            </div>

            <div className="mb-3">
                <label htmlFor="person.password" className="form-label">Password:</label>
                <input
                    defaultValue={professor ? professor.person?.password : ""}
                    name="person.password"
                    id="person.password"
                    className="form-control"
                    type="password"
                    autoComplete="current-password"
                />
            </div>

            <div className="mb-3">
                <label htmlFor="subjectList" className="form-label">
                    Add Subjects:
                </label>
                <div className="input-group">
                    <select
                        name="subjectList"
                        id="subjectList.id"
                        value={professor ? professor.subjectList : ""}
                        className="form-select"
                        onChange={(e) => setNewSubject(e.target.value)}
                        // value={newSubject}
                    >
                        <option value="" disabled>
                            {professor && professor.subjectList
                                ? "Add a subject"
                                : "Select a subject"}
                        </option>
                        {subjects?.map((sj) => (
                            <option key={sj} value={sj}>
                                {sj}
                            </option>
                        ))}
                    </select>
                    <button
                        type="button"
                        onClick={handleAddSubject}
                        className="btn btn-primary"
                    >
                        Add Subject
                    </button>
                </div>
                {selectedSubjects.length > 0 && (
                    <div>
                        <p>Selected Subjects:</p>
                        <ul>
                            {selectedSubjects.map((subject, index) => (
                                <li key={index}>{subject}</li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>


            <div className="mb-3">
                <label htmlFor="subjectList" className="form-label">Existing subjects:</label>
                <input
                    type="text"
                    name="subjectList"
                    id="subjectList"
                    value={professor ? professor.subjectList : ""}
                    readOnly
                    className="form-control"
                />
            </div>


            <div className="mb-3">
                <label htmlFor="person.role" className="form-label">Change Role:</label>
                <select
                    name="person.role"
                    id="person.role"
                    defaultValue={professor ? professor.person?.role : ""}
                    className="form-select"
                >
                    <option value="" disabled>
                        {professor && professor.person?.role ? professor.person.role : "Add a role"}
                    </option>
                    {roles?.map((rol) => (
                        <option
                            key={rol}
                            value={rol}
                        >
                            {rol}
                        </option>
                    ))}
                </select>
            </div>

            <div className="mb-3">
                <label htmlFor="person.role" className="form-label">Existing role:</label>
                <input
                    type="text"
                    name="person.role"
                    id="person.role"
                    value={professor ? professor.person?.role : ""}
                    readOnly
                    className="form-control"
                />
            </div>

            <div className="mb-3">
                <div className="d-flex justify-content-between">
                    <button type="submit" disabled={disabled} className="btn btn-primary">
                        {professor ? "Update Professor" : "Create Professor"}
                    </button>
                    <button type="button" onClick={onCancel} className="btn btn-secondary">
                        Cancel
                    </button>
                </div>
            </div>
        </form>
    );
};

export default ProfessorForm;