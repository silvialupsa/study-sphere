const StudentForm =({ onSave,disabled, student, onCancel, schools, people, grades})=>{


    const onSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const entries = [...formData.entries()];

        const student = entries.reduce((acc, entry) => {
            const [k, v] = entry;
            acc[k] = v;
            return acc;
        }, {});

        return onSave(student);
    };

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
                    defaultValue={student?.person}
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
                <label htmlFor="grade">Grade:</label>
                <select
                    name="grade"
                    id="grade"
                    defaultValue={student?.gradeClass}
                >
                    <option value="" disabled>
                        Select a grade
                    </option>
                    {grades?.map((p)=> (
                        <option
                            selected={student?.gradeClass === p.id}
                            key={p.id}
                            value={p.id}>{p.gradeClass}</option>
                    ))}
                </select>
            </div>

            <div className="control">
                <label htmlFor="school">School:</label>
                <select
                    name="school"
                    id="school"
                    defaultValue={student?.school}
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